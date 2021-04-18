import CaptureImage
from minimodem import Minimodem
import json
import action_request_pb2
import re


def process_data(modem, data, terminate_statement):
    data = Minimodem.clean_data(Minimodem, data, terminate_statement)
    action_request = action_request_pb2.ActionRequest()
    action_request.ParseFromString(bytes.fromhex(data))

    if action_request.action == action_request_pb2.ActionRequest.ACTION_GET_DEVICE_DETAILS:
        action_response = action_request_pb2.ActionRequest()
        try:
            device_details = CaptureImage.get_device_details()

            # Go through each device detail and add to protobuf
            device_details_proto = action_request_pb2.DeviceDetails()

            # Clean up and add the capture formats; originally a string representing a tuple
            capture_formats = re.sub('[^0-9,]', '', device_details["CaptureFormats"]).split(",")
            for format in capture_formats:
                format_to_set = device_details_proto.capture_formats.append(int(format))
                device_details_proto.device_version = device_details["DeviceVersion"]
                device_details_proto.model = device_details["Model"]
                action_response.response_successful = True
                action_response.device_details.CopyFrom(device_details_proto)
                
        except Exception as e:
            print("there was an error calling ACTION_GET_DEVICE_DETAILS: ", str(e))
            action_response.response_successful = False
            
        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_CAPTURE_IMAGE:
        action_response = action_request_pb2.ActionRequest()
        try:
            CaptureImage.capture_new_image(download_image=False)  # TODO(jordanhuus): remove hardcoded placeholder data
            action_response.response_successful = True
        except Exception as e:
            print("there was an error calling ACTION_CAPTURE_IMAGE: ", str(e))
            action_response.response_successful = False
            
        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_MULTIPLE_CAPTURES_BY_COUNT:
        action_response = action_request_pb2.ActionRequest()
        try:
            camera = Camera(camera_state=Camera.STATE_PENDING_CAPTURE)
            db.session.add(camera)
            db.session.commit()
            
            # TODO(jordanhuus): refactor to a simpler parameter set
            CaptureImage.multiple_captures({"name": "jordan"}, action_request.capture_count, camera.id, db)
            action_response.response_successful = True
            context.device_id = camera.id
            action_response.context.CopyFrom(context)
            
        except Exception as e:
            print("there was an error calling ACTION_MULTIPLE_CAPTURES_BY_COUNT: ", str(e))
            action_response.response_successful = False
            
        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_GET_CAMERA_STATE:
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
            print("there was an error calling ACTION_GET_CAMERA_STATE: ", str(e))
            action_response.response_successful = False

        modem.send(action_response.SerializeToString().hex())

    elif action_request.action == action_request_pb2.ActionRequest.ACTION_SET_EXPOSURE_TIME:
        action_response = action_request_pb2.ActionRequest()
        try:
            CaptureImage.set_exposure_time(action_request.exposure_time)  # TODO(jordanhuus): remove hard code
            action_response.response_successful = True
            action_response.camera_state = action_request_pb2.ActionRequest.COMPLETE

        except Exception as e:
            print("there was an error calling ACTION_SET_EXPOSURE_TIME: ", str(e))
            action_response.response_successful = False

        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_GET_EXPOSURE_TIME:
        action_response = action_request_pb2.ActionRequest()
        try:
            exposure_time = CaptureImage.get_exposure_time()  # TODO(jordanhuus): remove hard code
            action_response.response_successful = True
            action_response.exposure_time = exposure_time

        except Exception as e:
            print("there was an error calling ACTION_GET_EXPOSURE_TIME: ", str(e))
            action_response.response_successful = False
            
        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_SET_APERTURE_F_STOP:
        action_response = action_request_pb2.ActionRequest()
        try:
            CaptureImage.set_f_number(action_request.f_number)  # TODO(jordanhuus): remove hard code
            action_response.response_successful = True

        except Exception as e:
            print("there was an error calling ACTION_SET_APERTURE_F_STOP: ", str(e))
            action_response.response_successful = False

        modem.send(action_response.SerializeToString().hex())
            
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_GET_APERTURE_F_STOP:
        action_response = action_request_pb2.ActionRequest()
        try:
            f_number = CaptureImage.get_f_number()  # TODO(jordanhuus): remove hard code
            action_response.response_successful = True
            action_response.f_number = f_number

        except Exception as e:
            print("there was an error calling ACTION_GET_APERTURE_F_STOP: ", str(e))
            action_response.response_successful = False
            
        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_GET_APERTURE_OPTIONS:
        action_response = action_request_pb2.ActionRequest()
        try:
            f_number_options = CaptureImage.get_f_number_options()
            action_response.response_successful = True
            for num in f_number_options:
                num_to_set = action_response.aperture_options.append(num)

        except Exception as e:
            print("there was an error calling ACTION_GET_APERTURE_OPTIONS: ", str(e))
            action_response.response_successful = False

        modem.send(action_response.SerializeToString().hex())

    # TODO(jordanhuus): implement or remove
    # elif action_request.action == action_request_pb2.ActionRequest.ACTION_GET_LENS_ID:
    #     action_response = action_request_pb2.ActionRequest()
    #     try:
    #         lens_id = CaptureImage.get_lens_id()
    #         action_response.response_successful = True
    #         action_response.lens_id = lens_id

    #     except Exception as E:
    #         action_response.response_successful = False

    #     modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_GET_ISO_NUMBER:
        action_response = action_request_pb2.ActionRequest()
        try:
            iso_number = CaptureImage.get_iso_number()
            action_response.response_successful = True
            action_response.iso_number = iso_number

        except Exception as e:
            print("there was an error calling ACTION_GET_ISO_NUMBER: ", str(e))
            action_response.response_successful = False

        modem.send(action_response.SerializeToString().hex())
        
    elif action_request.action == action_request_pb2.ActionRequest.ACTION_SET_ISO_NUMBER:
        action_response = action_request_pb2.ActionRequest()
        try:
            CaptureImage.set_iso_number(action_request.iso_number)
            action_response.response_successful = True
            
        except Exception as e:
            print("there was an error calling ACTION_SET_ISO_NUMBER: ", str(e))
            action_response.response_successful = False

        modem.send(action_response.SerializeToString().hex())
            
    else:
        raise Exception(
            "ERROR: Action with index of {} does not exist or there is a problem locating it".format(action_request.action)
        )
    

data = None
modem = Minimodem()
while True:
    data = modem.receive("~")
    if data:
        process_data(modem, data, "~")
