# -*- coding: utf-8 -*-
from .import PtpAbstractTransport
import usb
from usb.util import endpoint_type, endpoint_direction, ENDPOINT_TYPE_BULK, \
    ENDPOINT_TYPE_INTR, ENDPOINT_IN, ENDPOINT_OUT, claim_interface
from usb.core import find, USBError
import struct
import time


class PtpUsbTransport(PtpAbstractTransport.PtpAbstractTransport):
    """Class defining a PTP USB transport."""
    
    USB_CLASS_PTP                           = 6
    PTP_USB_CONTAINER_COMMAND               = 1
    PTP_USB_CONTAINER_DATA                  = 2
    PTP_USB_CONTAINER_RESPONSE              = 3
    PTP_USB_CONTAINER_EVENT                 = 4

    def __init__(self, device):
        """Create a new PtpUsbTransport instance.
        
        Arguments:
        device -- USB ptp device."""

        # Device
        self.__device = device
                
        # Device interface
        self.__usb_interface = PtpUsbTransport.retrieve_device_interface(self.__device)
        if self.__usb_interface.bInterfaceClass != PtpUsbTransport.USB_CLASS_PTP:
            raise UsbException("Device")            
        
        # Device endpoints
        self.__bulkin = None
        self.__bulkout = None
        self.__irqin = None
        self.__bulkin, self.__bulkout, self.__irqin = PtpUsbTransport.retrieve_device_endpoints(self.__device)
        if (self.__bulkin == None) or (self.__bulkout == None) or (self.__irqin == None):
            raise RuntimeError("Unable to find all required endpoints")

        # Open the USB device
        # self.__usb_handle.set_configuration(test)
        claim_interface(self.__device, self.__usb_interface)
        device_name = PtpUsbTransport.retrieve_device_name(self.__device)
        print(f"Connected to {device_name}.")
        self.usb_read_timeout = 5000
        self.usb_write_timeout = 5000

        
    def __del__(self):
        """Cleanup a PtpUsbTransport structure."""
        
        try:
            self.__usb_handle.release_interface(self.__usb_interface)
            del self.__usb_handle
        except:
            pass

    
    def send_ptp_request(self, request):
        length = 12 + (len(request.params) * 4)
        buffer = struct.pack("<IHHI", length, self.PTP_USB_CONTAINER_COMMAND, request.opcode, request.transactionid)
        for p in request.params:
            buffer += struct.pack("<I", p)


        testyy = self.__bulkout
        if self.__device.write(self.__bulkout, buffer, self.usb_write_timeout) != length:
            raise UsbException(usb.USBError)

    
    def send_ptp_data(self, request, data):
        buffer = struct.pack("<IHHI", 12 + len(data), self.PTP_USB_CONTAINER_DATA, request.opcode, request.transactionid)
        buffer += data

        # NOTE: UNTESTED CODE
        while len(buffer) > 0:
            tmp = self.__usb_handle.bulk_write(self.__bulkout, buffer, self.usb_write_timeout)
            if tmp == 0:
                raise UsbException(usb.USBError)

            buffer = buffer[tmp:]


    def get_ptp_data(self, request, stream = None):
        # Get the header
        pkt = self.__usb_bulkread()
        (data_size, container_type, code, transactionid) = struct.unpack("<IHHI", pkt[0:12])
        
        # Make sure transactionid is correct
        if transactionid != request.transactionid:
            raise UsbException("Received unexpected PTP USB transactionid")
        
        # Handle the possibility of receiving a RESPONSE instead of data (e.g. on error condition)
        if container_type == self.PTP_USB_CONTAINER_RESPONSE:
            return self.__decode_ptp_response(request, pkt)
            # FIXME
        elif container_type != self.PTP_USB_CONTAINER_DATA:
            raise UsbException("Received unexpected PTP USB container type (%i)" % container_type)
        
        # Make sure it is sane (paranoia mode++)
        if code != request.opcode:
            raise UsbException("Received unexpected PTP USB opcode")
        if transactionid != request.transactionid:
            raise UsbException("Received unexpected PTP USB opcode")
        data_size -= 12
        
        # Deal with the piece of the data body we've already read
        toread = len(pkt) - 12
        if toread > data_size: 
            toread = data_size
            
        buffer = None
        if (stream == None):
            buffer = pkt[12:12+toread]
        else:
            stream.write(pkt[12:12+toread])
        done = toread

        # Read the rest of the data
        while done != data_size:
            pkt = self.__usb_bulkread()

            toread = len(pkt)
            if toread > (data_size - done):
                toread = data_size - done
                
            if stream == None:
                buffer += pkt[0:toread]
            else:
                stream.write(pkt[0:toread])
            done += toread

        return (data_size, buffer)


    def get_ptp_response(self, request):
        return self.__decode_ptp_response(request, self.__usb_bulkread())
    
    def check_ptp_event(self, sessionid, timeout=None):
        if timeout == None:
            timeout = 0
        
        # Read the packet
        pkt = self.__usb_bulkread(timeout = timeout, ep=self.__irqin)
        (data_size, container_type, code) = struct.unpack("<IHH", pkt[0:8])

        # Make sure it is sane (paranoia mode++)
        if container_type != self.PTP_USB_CONTAINER_EVENT:
            raise UsbException("Received unexpected PTP USB container type (0x%04x)" % container_type)

        # Extract the body
        pkt = pkt[8:]
        param_count = (data_size - 12) / 4

        # Parse it
        (transactionid, ) = struct.unpack("<I", pkt[0:4])
        params = struct.unpack("<" + ("I" * int(param_count)), pkt[4:])

        return PtpAbstractTransport.PtpEvent(code, sessionid, transactionid, params)

    def __decode_ptp_response(self, request, pkt):
        # Read the packet
        (data_size, container_type, code, transactionid) = struct.unpack("<IHHI", pkt[0:12])

        # Make sure it is sane (paranoia mode++)
        if data_size > 32:
            raise UsbException("Received unexpected data size (%i) for PTP response" % data_size)            
        if container_type != self.PTP_USB_CONTAINER_RESPONSE:
            raise UsbException("Received unexpected PTP USB container type (%i)" % container_type)
        if transactionid != request.transactionid:
            raise UsbException("Received unexpected PTP USB transactionid (%i != %i)" % (transactionid, request.transactionid))

        param_count = int((data_size - 12) / 4)
        params = struct.unpack("<" + ("I" * param_count), pkt[12: 12 + (4*param_count)])
        return PtpAbstractTransport.PtpResponse(code, request.sessionid, transactionid, params)
    

    def __usb_bulkread(self, urb_size=512, timeout=None, ep=None):
        if ep == None:
             ep = self.__bulkin

        return self.__device.read(ep, urb_size, timeout)

    
    def __hexdump(self, data):
        print()
        for b in data:
            print(hex(ord(b)))

    @classmethod
    def findptps(cls, device_class):

        # find all usb devices
        devices = usb.core.find(find_all=True)

        # Loop through the device's metadata and retrieve it's endpoints
        device = None
        for dev in devices:
            for config in dev:
                for intf in config:
                    if intf.bInterfaceClass == device_class:
                        device = dev
                        break
                    else:
                        continue

                if device is not None:
                    break

            if device is not None:
                break

        if device:
            return device
        else:
            raise UsbException("USB camera not found.")


    @classmethod
    def retrieve_device_endpoints(cls, device, return_endpoint_address=False):
        ep_bulk_in = None
        ep_bulk_out = None
        ep_interrupt_in = None
        
        # Retrieve device endpoints (BULK and INTERRUPT)
        for config in device:
            for intf in config:
                for ep in intf.endpoints():
                        
                    ep_type = endpoint_type(ep.bmAttributes)
                    ep_direction = endpoint_direction(ep.bEndpointAddress)
                    if ep_type == ENDPOINT_TYPE_BULK and ep_direction == ENDPOINT_IN:
                        ep_bulk_in = ep
                    elif ep_type == ENDPOINT_TYPE_BULK and ep_direction == ENDPOINT_OUT:
                        ep_bulk_out = ep
                    elif ep_type == ENDPOINT_TYPE_INTR and ep_direction == ENDPOINT_IN:
                        ep_interrupt_in = ep
                
        # Ensure that all three endpoints are found
        if not ep_bulk_in:
            raise Exception("Missing bulk in endpoint.")
        elif not ep_bulk_out:
            raise Exception("Missing bulk out endpoint.")
        elif not ep_interrupt_in:
            raise Exception("Missing interrupt in endpoint.")

        if return_endpoint_address:
            return ep_bulk_in.address, ep_bulk_out.address, ep_interrupt_in.address
        else:
            return ep_bulk_in, ep_bulk_out, ep_interrupt_in


    @classmethod
    def retrieve_device_interface(cls, device):
        for config in device:
            for intf in config:
                return intf

    @classmethod
    def retrieve_device_name(cls, device):
        return usb.util.get_string(device, device.iProduct)


class UsbException(Exception):

    def __init__(self, value):
        self.value = value

    def __str__(self):
        return "USBException(%s)" % repr(self.value)
