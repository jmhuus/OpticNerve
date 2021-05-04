import CaptureImage
from minimodem import Minimodem
import action_request_pb2
import re
from threading import Thread
from oled import OledScreen
from queue import Queue
import utils
from PIL import Image
import io


def process_data(modem, data, terminate_statement, thread_queue):
    data = Minimodem.clean_data(Minimodem, data, terminate_statement)
    action_request = action_request_pb2.ActionRequest()
    print("about to 'fromhex' the following data: ", data)
    action_request.ParseFromString(bytes.fromhex(data))

    if action_request.action == action_request_pb2.ActionRequest.ACTION_GET_DEVICE_DETAILS:
        thread_queue.put("Calling ACTION_GET_DEVICE_DETAILS")
        action_response = action_request_pb2.ActionRequest()
        try:
            device_details = CaptureImage.get_device_details()
            device_details_proto = action_request_pb2.DeviceDetails()
            device_details_proto.device_version = device_details["DeviceVersion"]
            device_details_proto.model = device_details["Model"]
            device_details_proto.manufacturer = device_details["Manufacturer"]
            action_response.response_successful = True
            action_response.device_details.CopyFrom(device_details_proto)
                
        except Exception as e:
            thread_queue.put("there was an error calling ACTION_GET_DEVICE_DETAILS: ", str(e))
            action_response.response_successful = False
            
        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_CAPTURE_IMAGE:
        import pdb; pdb.set_trace()
        thread_queue.put("Calling ACTION_CAPTURE_IMAGE")
        action_response = action_request_pb2.ActionRequest()
        try:
            image_name = CaptureImage.capture_new_image()
            action_response.response_successful = True
            image_proto = action_request_pb2.Image()
            image_proto.name = image_name
            action_response.image.CopyFrom(image_proto)
            
        except Exception as e:
            thread_queue.put("there was an error calling ACTION_CAPTURE_IMAGE: ", str(e))
            action_response.response_successful = False
            
        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_MULTIPLE_CAPTURES_BY_COUNT:
        thread_queue.put("Calling ACTION_MULTIPLE_CAPTURES_BY_COUNT")
        action_response = action_request_pb2.ActionRequest()
        try:
            camera = Camera(camera_state=Camera.STATE_PENDING_CAPTURE)
            db.session.add(camera)
            db.session.commit()
            
            CaptureImage.multiple_captures(action_request.capture_count, camera.id, db)
            action_response.response_successful = True
            context.device_id = camera.id
            action_response.context.CopyFrom(context)
            
        except Exception as e:
            thread_queue.put("there was an error calling ACTION_MULTIPLE_CAPTURES_BY_COUNT: ", str(e))
            action_response.response_successful = False
            
        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_GET_CAMERA_STATE:
        thread_queue.put("Calling ACTION_GET_CAMERA_STATE")
        action_response = action_request_pb2.ActionRequest()
        try:
            camera = Camera.query.get(action_request.device_id)
            if camera.camera_state == Camera.STATE_COMPLETE:
                action_response.response_successful = True
                action_response.camera_state = action_request_pb2.ActionRequest.COMPLETE
                action_response.context.CopyFrom(context)

            elif camera.camera_state == Camera.STATE_PENDING_CAPTURE:
                action_response.response_successful = True
                action_response.camera_state = action_request_pb2.ActionRequest.PENDING_CAPTURE
                action_response.context.CopyFrom(context)

        except Exception as e:
            thread_queue.put("there was an error calling ACTION_GET_CAMERA_STATE: ", str(e))
            action_response.response_successful = False

        modem.send(action_response.SerializeToString().hex())

    elif action_request.action == action_request_pb2.ActionRequest.ACTION_SET_EXPOSURE_TIME:
        thread_queue.put("Calling ACTION_SET_EXPOSURE_TIME")
        action_response = action_request_pb2.ActionRequest()
        try:
            CaptureImage.set_exposure_time(action_request.exposure_time)
            action_response.response_successful = True

        except Exception as e:
            thread_queue.put("there was an error calling ACTION_SET_EXPOSURE_TIME: ", str(e))
            action_response.response_successful = False

        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_GET_EXPOSURE_TIME:
        thread_queue.put("Calling ACTION_GET_EXPOSURE_TIME")
        action_response = action_request_pb2.ActionRequest()
        try:
            exposure_time = CaptureImage.get_exposure_time()
            action_response.response_successful = True
            action_response.exposure_time = exposure_time

        except Exception as e:
            thread_queue.put("there was an error calling ACTION_GET_EXPOSURE_TIME: ", str(e))
            action_response.response_successful = False
            n
        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_SET_APERTURE_F_STOP:
        thread_queue.put("Calling ACTION_SET_APERTURE_F_STOP")
        action_response = action_request_pb2.ActionRequest()
        try:
            CaptureImage.set_f_number(action_request.f_number)
            action_response.response_successful = True

        except Exception as e:
            thread_queue.put("there was an error calling ACTION_SET_APERTURE_F_STOP: ", str(e))
            action_response.response_successful = False

        modem.send(action_response.SerializeToString().hex())
            
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_GET_APERTURE_F_STOP:
        thread_queue.put("Calling ACTION_GET_APERTURE_F_STOP")
        action_response = action_request_pb2.ActionRequest()
        try:
            f_number = CaptureImage.get_f_number()
            action_response.response_successful = True
            action_response.f_number = f_number

        except Exception as e:
            thread_queue.put("there was an error calling ACTION_GET_APERTURE_F_STOP: ", str(e))
            action_response.response_successful = False
            
        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_GET_APERTURE_OPTIONS:
        thread_queue.put("Calling ACTION_GET_APERTURE_OPTIONS")
        action_response = action_request_pb2.ActionRequest()
        try:
            f_stop_type, minimum_f_stop_index, maximum_f_stop_index = \
                CaptureImage.get_f_number_options()
            action_response.f_stop_type = f_stop_type
            action_response.minimum_f_stop_index = minimum_f_stop_index
            action_response.maximum_f_stop_index = maximum_f_stop_index
            action_response.response_successful = True

        except Exception as e:
            thread_queue.put("there was an error calling ACTION_GET_APERTURE_OPTIONS: ", str(e))
            action_response.response_successful = False

        modem.send(action_response.SerializeToString().hex())

    # TODO(jordanhuus): implement or remove
    # elif action_request.action == action_request_pb2.ActionRequest.ACTION_GET_LENS_ID:
    #     thread_queue.put("Calling ACTION_GET_LENS_ID")
    #     action_response = action_request_pb2.ActionRequest()
    #     try:
    #         lens_id = CaptureImage.get_lens_id()
    #         action_response.response_successful = True
    #         action_response.lens_id = lens_id

    #     except Exception as E:
    #         action_response.response_successful = False

    #     modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_GET_ISO_NUMBER:
        thread_queue.put("Calling ACTION_GET_ISO_NUMBER")
        action_response = action_request_pb2.ActionRequest()
        try:
            iso_number = CaptureImage.get_iso_number()
            action_response.response_successful = True
            action_response.iso_number = iso_number

        except Exception as e:
            thread_queue.put("there was an error calling ACTION_GET_ISO_NUMBER: ", str(e))
            action_response.response_successful = False

        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_SET_ISO_NUMBER:
        thread_queue.put("Calling ACTION_SET_ISO_NUMBER")
        action_response = action_request_pb2.ActionRequest()
        try:
            CaptureImage.set_iso_number(action_request.iso_number)
            action_response.response_successful = True
            
        except Exception as e:
            thread_queue.put("there was an error calling ACTION_SET_ISO_NUMBER: ", str(e))
            action_response.response_successful = False

        modem.send(action_response.SerializeToString().hex())


    elif action_request.action == action_request_pb2.ActionRequest.ACTION_GET_IMAGE:
        thread_queue.put("Calling ACTION_GET_IMAGE")
        image_path = utils.ensure_path_available(
                os.path.expanduser("~")+"/Documents/optic-nerve/images/") + \
                action_request.image_name
        
        action_response = action_request_pb2.ActionRequest()
        image_proto = action_request_pb2.Image()
        try:
            img_byte_arr = io.BytesIO()
            with Image.open(image_path) as im:

                # Crop the image
                width, height = im.size
                image_proto.height = height
                image_proto.width = width
                top = 4 * (height / 12)
                left = 4 * (width / 12)
                right = 5 * (width / 12)
                bottom = 5 * (height / 12)
                im1 = im.crop((left, top, right, bottom))

                # Image bytes
                im1.save(img_byte_arr, format='JPEG', quality=20)
                image_proto.data = img_byte_arr.getvalue()
                
            action_response.response_successful = True
            action_response.image.CopyFrom(image_proto)
            
        except Exception as e:
            thread_queue.put("there was an error calling ACTION_GET_IMAGE: ", str(e))
            action_response.response_successful = False

        modem.send(action_response.SerializeToString().hex())

        
    else:
        raise Exception(
            "ERROR: Action with index of {} does not exist or there is a problem locating it".format(action_request.action)
        )

def process_error(modem, data, terminate_statement):
    import time; time.sleep(10)
    action_response = action_request_pb2.ActionRequest()
    action_response.response_successful = False
    action_response.action = action_request_pb2.ActionRequest.ACTION_ERROR_RESEND_ACTION
    modem.send(action_response.SerializeToString().hex())
    

def radio_listener(thread_queue):
    print("new radio_listener")
    data = None
    modem = Minimodem()
    while True:
        try:
            thread_queue.put("Listening for transmission...")
            data = modem.receive("~")
            print("data: ", data)
            if data:
                process_data(modem, data, "~", thread_queue)
        except Exception as e:
            thread_queue.put("There was an error in radio.py: " + str(e))
            print("There was an error in radio.py: ", str(e))
            process_error(modem, None, "~")
            exit(1)
    

import time
thread_queue = Queue()
thread_queue.put("helloooooo")
oled = OledScreen(thread_queue)
while True:
    t1 = Thread(
        target=radio_listener,
        args=(thread_queue, ),
        daemon=False
    )
    t1.start()
    while t1.is_alive():
        time.sleep(1)
    else:
        print("=== radio_listener thread died ===\n\n\nrestarting...")

