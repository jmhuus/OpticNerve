#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys
import traceback
from ptp.PtpUsbTransport import PtpUsbTransport
from ptp.PtpSession import PtpSession, PtpException
import ptp.NikonSupport as NikonSupport
from ptp import PtpValues
import time
from datetime import datetime



def get_device_details():
    """TODO(jordanhuus): add description
    """
    ptpTransport = PtpUsbTransport(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD
    device_info = None

    try:
        # Open device session
        ptpSession.OpenSession()
        device_info = ptpSession.GetDeviceInfoDict()

    except PtpException as e:
        print("PTP Exception: %s" % PtpValues.ResponseNameById(e.responsecode, vendorId))
    except Exception as e:
        print("An exception occurred: %s" % e)
        traceback.print_exc()

    # Close the session
    del ptpSession
    del ptpTransport

    return device_info


def capture_new_image(context, file=None):
    """Simple function to initiate camera capture and store the result into
    the provided file object.
    
    Note:
        Callers should expect the image to have saved correctly if an exception was not
        thrown.

    Args:
        param1: file object opened using 'wb' to result in <class '_io.BufferedWriter'>.
        param2: context about the currently connected device.
    """
    ptpTransport = PtpUsbTransport(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD

    try:
        # Open device session
        ptpSession.OpenSession()
        print(ptpSession.GetFormattedDeviceInfoString())
        ptpSession.InitiateCapture(objectFormatId=PtpValues.StandardObjectFormats.EXIF_JPEG)
        recorded_time = datetime.now()

        # Check for new object added after capture
        objectid = None
        while True:
            evt = ptpSession.CheckForEvent(None)
            if evt == None:
                raise Exception("Capture did not complete")
            if evt.eventcode == PtpValues.StandardEvents.OBJECT_ADDED:
                objectid = evt.params[0]
                break

        # Download newly added object
        if objectid != None:
            if file is None:
                file = open("../frontend/src/assets/images/latest.jpg", "wb")
            ptpSession.GetObject(objectid, file)
            file.close()
            ptpSession.DeleteObject(objectid)

    except PtpException as e:
        print("PTP Exception: %s" % PtpValues.ResponseNameById(e.responsecode, vendorId))
    except Exception as e:
        print("An exception occurred: %s" % e)
        traceback.print_exc()

    # Close the session
    del ptpSession
    del ptpTransport



def begin_timelapse(file, delay, context):
    """Simple function to initiate camera capture and store the result into
    the provided file object.n
    
    Note:
        Callers should expect the image to have saved correctly if an exception was not
        thrown.

    Args:
        param1: file object opened using 'wb' to result in <class '_io.BufferedWriter'>
        param2: delay between captures. In milliseconds.
        param3: context about the currenntly conntected device.
    """
    ptpTransport = PtpUsbTransport(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD

    try:
        # Open device session
        ptpSession.OpenSession()
        print(ptpSession.GetFormattedDeviceInfoString())

        # Initiate timelapse capture events
        id = 0
        while True:
            ptpSession.InitiateCapture(objectFormatId=PtpValues.StandardObjectFormats.EXIF_JPEG)

            # Check for new object added after capture
            objectid = None
            while True:
                evt = ptpSession.CheckForEvent(None)
                if evt == None:
                    raise Exception("Capture did not complete")
                if evt.eventcode == PtpValues.StandardEvents.OBJECT_ADDED:
                    objectid = evt.params[0]
                    break

            # Download newly added object
            if objectid != None:
                if file is None:
                    file = open("capture_%i.jpg" % id, "wb")
                ptpSession.GetObject(objectid, file)
                file.close()
                id+=1
                ptpSession.DeleteObject(objectid)

            # Delay between shots
            time.sleep(delay)

    except PtpException as e:
        print("PTP Exception: %s" % PtpValues.ResponseNameById(e.responsecode, vendorId))
    except Exception as e:
        print("An exception occurred: %s" % e)
        traceback.print_exc()

    # Close the session
    del ptpSession
    del ptpTransport



def set_exposure_time(exposure_time, context):
    """Changes the current exposure time when using manual mode. TODO(jordanhuus): confirm when this works and doesn't work.

    Args:
        param1: (int) in milliseconds on how long the exposure will be open.
        param2: context about the currently connected device.
    """
    ptpTransport = PtpUsbTransport(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD

    try:
        # Open device session
        print("open session")
        ptpSession.OpenSession()
        print("setexposuretime")
        ptpSession.SetExposureTime(exposure_time)

    except PtpException as e:
        print("PTP Exception: %s" % PtpValues.ResponseNameById(e.responsecode, vendorId))
    except Exception as e:
        print("An exception occurred: %s" % e)
        traceback.print_exc()

    # Close the session
    del ptpSession
    del ptpTransport



def set_f_number(f_number, context):
    """Changes the current aperture size when using manual mode. TODO(jordanhuus): confirm when this works and doesn't work.

    Args:
        param1 (float): TODO(jordanhuus): determine unit of measurement
        param2: context about the currently connected device.
    """
    ptpTransport = PtpUsbTransport(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD

    try:
        # Open device session
        ptpSession.OpenSession()
        ptpSession.SetFNumber(f_number)

    except PtpException as e:
        print("PTP Exception: %s" % PtpValues.ResponseNameById(e.responsecode, vendorId))
    except Exception as e:
        print("An exception occurred: %s" % e)
        traceback.print_exc()

    # Close the session
    del ptpSession
    del ptpTransport


def get_f_number(context):
    """Changes the current aperture size when using manual mode. TODO(jordanhuus): confirm when this works and doesn't work.

    Args:
        param1 (float): TODO(jordanhuus): determine unit of measurement
        param2: context about the currently connected device.
    """
    ptpTransport = PtpUsbTransport(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD
    f_number = None

    try:
        # Open device session
        ptpSession.OpenSession()
        f_number = ptpSession.GetFNumber()

    except PtpException as e:
        print("PTP Exception: %s" % PtpValues.ResponseNameById(e.responsecode, vendorId))
    except Exception as e:
        print("An exception occurred: %s" % e)
        traceback.print_exc()

    # Close the session
    del ptpSession
    del ptpTransport
    
    return f_number


# TODO(jordanhuus): attempt to query the device before trial and error proceedure
# TODO(jordanhuus): ensure stop options that collide with other increments don't incorrectly
def get_f_number_options(context):
    """Changes the current aperture size when using manual mode. TODO(jordanhuus): confirm when this works and doesn't work.

    Args:
        param1 (float): TODO(jordanhuus): determine unit of measurement
        param2: context about the currently connected device.
    """
    ptpTransport = PtpUsbTransport(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD
    minimum_f_stop = None
    maximum_f_stop = None
    f_stop_type_index = None


    try:
        # Open device session
        ptpSession.OpenSession()

        
        # Available f-stop values
        # Start with the most granular option (1/3rd stops)
        f_numbers_third_stops = [
            100,110,120,140,160,
            180,200,220,250,280,
            320,350,400,450,500,
            560,630,710,800,900,
            1000,1100,1300,1400,
            1600,1800,2000,2200,
            2500,2900,3200,3600
        ]
        f_numbers_half_stops = [
            100, 120, 140, 170,
            200, 240, 280, 330,
            400, 480, 560, 670,
            800, 950, 1100, 1300,
            1600, 1900, 2200, 2700,
            3200
        ]
        f_numbers_full_stops = [
            100, 140, 200, 280,
            400, 560, 800, 1100,
            1600, 2200, 3200
        ]
        f_stops = [f_numbers_third_stops, f_numbers_half_stops, f_numbers_full_stops]

        # Attempt to find min/max f-stop values
        for i in range(len(f_stops)):
            if minimum_f_stop and maximum_f_stop:
                break
            
            # Find min
            for f_number in f_stops[i]:
                try:
                    ptpSession.SetFNumber(f_number)

                    if not minimum_f_stop:
                        minimum_f_stop = f_number
                        f_stop_type_index = i
                        break
                        
                except PtpException as ptpe:
                    if ptpe.args[0] == 8220:
                        continue

            # Find max
            for f_number in f_stops[i][::-1]:
                try:
                    ptpSession.SetFNumber(f_number)

                    if not maximum_f_stop:
                        maximum_f_stop = f_number
                        f_stop_type_index = i
                        break
                    
                except PtpException as ptpe:
                    if ptpe.args[0] == 8220:
                        continue

    except PtpException as e:
        print("PTP Exception: %s" % PtpValues.ResponseNameById(e.responsecode, vendorId))
    except Exception as e:
        print("An exception occurred: %s" % e)
        traceback.print_exc()

    # Close the session
    del ptpSession
    del ptpTransport
    
    return f_stops[f_stop_type_index][\
                                      f_stops[f_stop_type_index].index(minimum_f_stop):\
                                      f_stops[f_stop_type_index].index(maximum_f_stop)+1
    ]
