#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys
import os, stat
import traceback
from ptp.PtpUsbTransport import PtpUsbTransport
from ptp.PtpSession import PtpSession, PtpException
import ptp.NikonSupport as NikonSupport
from ptp import PtpValues
import time
from datetime import datetime
from threading import Thread
from model import Camera
from utils import get_base_application_path, ensure_path_available


def get_usb_device_ids():
    """Retrieves all USB devies with USB device class #6 (PTP deviecs)
    """
    return PtpUsbTransport.getDeviceIds(PtpUsbTransport.USB_CLASS_PTP)


def get_device_details():
    """TODO(jordanhuus): add description
    """
    ptpTransport = PtpUsbTransport(
        PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(
            PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD
    device_info = None

    try:
        # Open device session
        ptpSession.OpenSession()
        device_info = ptpSession.GetDeviceInfoDict()
        device_info["Model"] = ptpTransport.device_name
        
    except PtpException as e:
        raise PtpException(
            "PTP Exception: %s" %
            PtpValues.ResponseNameById(
                e.responsecode,
                vendorId),
            ptpSession, ptpTransport)
    except Exception as e:
        raise Exception(e)

    # Close the session
    del ptpSession
    del ptpTransport

    return device_info


def capture_new_image(delete_from_device=False, download_image=True):
    """Initiate camera capture and store the result.
    
    Note:
        Callers should expect the image to have saved 
        correctly if an exception was not thrown.

    Args:
        param1: file object opened using 'wb' to result in 
        <class '_io.BufferedWriter'>.
    """
    # PTP Protocol Prep
    ptpTransport = PtpUsbTransport(
        PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(
            PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD

    try:
        # Open device session
        ptpSession.OpenSession()
        ptpSession.InitiateCapture(
            objectFormatId=PtpValues.StandardObjectFormats.EXIF_JPEG)

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
        image_file_name = \
            "latest_%s.jpg" % datetime.now().strftime("%Y_%m_%d_%H_%M_%S")
        if download_image:
            save_path = ensure_path_available(
                os.path.expanduser("~")+"/Documents/optic-nerve/images/"
            )+image_file_name
            if objectid is not None:
                with open(save_path, "wb") as file:
                    ptpSession.GetObject(objectid, file)
                    ptpSession.DeleteObject(objectid)

        return image_file_name
    
    except PtpException as e:
        raise PtpException(
            "PTP Exception: %s" % PtpValues.ResponseNameById(
                e.responsecode,
                vendorId),
            ptpSession,
            ptpTransport)
    except Exception as e:
        raise Exception(e)

    # Close the session
    del ptpSession
    del ptpTransport


def multiple_captures(capture_count, session_id, db):
    """Initiates a series of captures based on the count.
    
    Note:
        Callers should observe begin polling the endpoint '/get-camera-state'
        in order to determine when the device has completed it's series of 
        capturing images.

    Args:
        param1: (integer) representing the number of images to be taken.
    """


    # TODO(jordanhuus): add threading Event() to allow the frontend to cancel the operation
    #    - See .../computer_science/test_threading/main.py for examples
    def capture_thread(capture_count):
        # PTP Protocol Prep
        ptpTransport = PtpUsbTransport(
            PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
        bulk_in, bulk_out, interrupt_in = \
            PtpUsbTransport.retrieve_device_endpoints(
                PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
        ptpSession = PtpSession(ptpTransport)
        vendorId = PtpValues.Vendors.STANDARD
        image_file_name = None
        camera = Camera.query.get(session_id)

        try:
            # Open device session
            ptpSession.OpenSession()

            for _ in range(capture_count):
                ptpSession.InitiateCapture(
                    objectFormatId=PtpValues.StandardObjectFormats.EXIF_JPEG)
                
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
                image_file_name = \
                    "latest_%s.jpg" % datetime.now().strftime(
                        "%Y_%m_%d_%H_%M_%S")
                save_path = ensure_path_available(
                    os.path.expanduser("~")+"/Documents/optic-nerve/images/"
                )+image_file_name
                if objectid is not None:
                    with open(save_path, "wb") as file:
                        ptpSession.GetObject(objectid, file)
                        
                    camera.image_file_name = image_file_name
                    db.session.commit()
                        
        except PtpException as e:
            raise PtpException(
                "PTP Exception: %s" % PtpValues.ResponseNameById(
                    e.responsecode,
                    vendorId),
                ptpSession,
                ptpTransport)
        except Exception as e:
            raise Exception(e)

        # Close the session
        del ptpSession
        del ptpTransport

        # Set camera state to complete
        camera.camera_state = Camera.STATE_COMPLETE
        db.session.commit()

    # Start new thread to capture images
    t1 = Thread(
        target=capture_thread,
        kwargs={"capture_count": capture_count},
        daemon=True)
    t1.start()


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
    ptpTransport = PtpUsbTransport(
        PtpUsbTransport.findptps(
            PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(
            PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD

    try:
        # Open device session
        ptpSession.OpenSession()

        # Initiate timelapse capture events
        id = 0
        while True:
            ptpSession.InitiateCapture(
                objectFormatId=PtpValues.StandardObjectFormats.EXIF_JPEG)

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
                file = open("capture_%i.jpg" % id, "wb")
                ptpSession.GetObject(objectid, file)
                file.close()
                id+=1
                ptpSession.DeleteObject(objectid)

            # Delay between shots
            time.sleep(delay)
    except PtpException as e:
        raise PtpException(
            "PTP Exception: %s" % PtpValues.ResponseNameById(
                e.responsecode,
                vendorId),
            ptpSession,
            ptpTransport)
    except Exception as e:
        raise Exception(e)

    # Close the session
    del ptpSession
    del ptpTransport



def set_exposure_time(exposure_time):
    """Changes the current exposure time when using manual mode. 
       TODO(jordanhuus): confirm when this works and doesn't work.

    Args:
        param1: (int) in milliseconds on how long the exposure will be open.
    """
    ptpTransport = PtpUsbTransport(
        PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(
            PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD

    try:
        # Open device session
        ptpSession.OpenSession()
        ptpSession.SetExposureTime(exposure_time)

    except PtpException as e:
        raise PtpException(
            "PTP Exception: %s" % PtpValues.ResponseNameById(
                e.responsecode,
                vendorId),
            ptpSession,
            ptpTransport)
    except Exception as e:
        raise Exception(e)

    # Close the session
    del ptpSession
    del ptpTransport



def get_exposure_time():
    """TODO(jordanhuus): set doc string.
    """
    ptpTransport = PtpUsbTransport(
        PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(
            PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD
    exposure_time = None

    try:
        # Open device session
        ptpSession.OpenSession()
        exposure_time = ptpSession.GetExposureTime()

    except PtpException as e:
        raise PtpException(
            "PTP Exception: %s" % PtpValues.ResponseNameById(
                e.responsecode,
                vendorId),
            ptpSession,
            ptpTransport)
    except Exception as e:
        raise Exception(e)

    # Close the session
    del ptpSession
    del ptpTransport

    return exposure_time


def set_f_number(f_number):
    """Changes the current aperture size when using manual mode.
       TODO(jordanhuus): confirm when this works and doesn't work.

    Args:
        param1 (float): TODO(jordanhuus): determine unit of measurement
    """
    ptpTransport = PtpUsbTransport(
        PtpUsbTransport.findptps(
            PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(
            PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD

    try:
        # Open device session
        ptpSession.OpenSession()
        ptpSession.SetFNumber(f_number)

    except PtpException as e:
        raise PtpException(
            "PTP Exception: %s" % PtpValues.ResponseNameById(
                e.responsecode,
                vendorId),
            ptpSession,
            ptpTransport)
    except Exception as e:
        raise Exception(e)

    # Close the session
    del ptpSession
    del ptpTransport


def get_f_number():
    """Changes the current aperture size when using manual mode.
       TODO(jordanhuus): confirm when this works and doesn't work
       based on the current mode being used. Perhaps this app can
       override the shooting mode?

    Args:
        param1 (float): TODO(jordanhuus): determine unit of measurement
    """
    ptpTransport = PtpUsbTransport(
        PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(
            PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD
    f_number = None

    try:
        # Open device session
        ptpSession.OpenSession()
        f_number = ptpSession.GetFNumber()
        
    except PtpException as e:
        raise PtpException(
            "PTP Exception: %s" % PtpValues.ResponseNameById(
                e.responsecode,
                vendorId),
            ptpSession,
            ptpTransport)
    except Exception as e:
        raise Exception(e)

    # Close the session
    del ptpSession
    del ptpTransport
    
    return f_number


# TODO(jordanhuus): attempt to query the device before trial and error proceedure
# TODO(jordanhuus): ensure stop options that collide with other increments don't incorrectly
def get_f_number_options():
    """TODO(jordanhuus): add doc string
    """
    ptpTransport = PtpUsbTransport(
        PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(
            PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
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
        raise PtpException(
            "PTP Exception: %s" % PtpValues.ResponseNameById(
                e.responsecode,
                vendorId),
            ptpSession,
            ptpTransport)
    except Exception as e:
        raise Exception(e)

    # Close the session
    del ptpSession
    del ptpTransport

    if f_stop_type_index == 0:
        f_stop_type = "third_stops"
    elif f_stop_type_index == 1:
        f_stop_type = "half_stops"
    elif f_stop_type_index == 2:
        f_stop_type = "full_stops"
    return (f_stop_type,
            f_stops[f_stop_type_index].index(minimum_f_stop),
            f_stops[f_stop_type_index].index(maximum_f_stop)
    )


def get_iso_number():
    """TODO(jordanhuus): add doc string
    """
    ptpTransport = PtpUsbTransport(
        PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(
            PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD
    iso_number = None

    try:
        # Open device session
        ptpSession.OpenSession()
        iso_number = ptpSession.GetExposureIndex()
        

        
    except PtpException as e:
        raise PtpException(
            "PTP Exception: %s" % PtpValues.ResponseNameById(
                e.responsecode,
                vendorId),
            ptpSession,
            ptpTransport)
    except Exception as e:
        raise Exception(e)

    # Close the session
    del ptpSession
    del ptpTransport
    
    return iso_number


def set_iso_number(iso_number):
    """TODO(jordanhuus): add doc string
    """
    ptpTransport = PtpUsbTransport(
        PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    bulk_in, bulk_out, interrupt_in = \
        PtpUsbTransport.retrieve_device_endpoints(
            PtpUsbTransport.findptps(PtpUsbTransport.USB_CLASS_PTP))
    ptpSession = PtpSession(ptpTransport)
    vendorId = PtpValues.Vendors.STANDARD

    try:
        # Open device session
        ptpSession.OpenSession()
        ptpSession.SetExposureIndex(iso_number)
        
    except PtpException as e:
        raise PtpException(
            "PTP Exception: %s" % PtpValues.ResponseNameById(
                e.responsecode,
                vendorId),
            ptpSession,
            ptpTransport)
    except Exception as e:
        raise Exception(e)

    # Close the session
    del ptpSession
    del ptpTransport
    
    return iso_number
