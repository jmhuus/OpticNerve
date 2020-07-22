#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys
import traceback
from ptp.PtpUsbTransport import PtpUsbTransport
from ptp.PtpSession import PtpSession, PtpException
from ptp import PtpValues
import time
from datetime import datetime




def capture_new_image(file=None):
    """Simple function to initiate camera capture and store the result into
    the provided file object.n
    
    Note:
        Callers should expect the image to have saved correctly if an exception was not
        thrown.

    Args:
        param1: file object opened using 'wb' to result in <class '_io.BufferedWriter'>
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
                file = open("images/capture_%s.jpg" % recorded_time.strftime("%Y_%m_%d_%H_%M_%S"), "wb")
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



def begin_timelapse(file, delay):
    """Simple function to initiate camera capture and store the result into
    the provided file object.n
    
    Note:
        Callers should expect the image to have saved correctly if an exception was not
        thrown.

    Args:
        param1: file object opened using 'wb' to result in <class '_io.BufferedWriter'>
        param2: delay between captures. In milliseconds.
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
