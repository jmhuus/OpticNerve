import CaptureImage
from minimodem import Minimodem
import json


def process_data(modem, data, terminate_statement):
    data = Minimodem.clean_data(Minimodem, data, terminate_statement)
    data = json.loads(data)
    action = data["action"]
    data = data["data"] 

    if action == Minimodem.ACTION_GET_DEVICE_DETAILS:
        try:
            device_details = CaptureImage.get_device_details()
            response = {
                "success": True,
                "device-details": device_details
            }
        except Exception as e:
            response = {
                "success": False
            }
        modem.send(json.dumps(response))
        
    elif action == Minimodem.ACTION_CAPTURE_IMAGE:
        try:
            CaptureImage.capture_new_image(data["context"])
            response = {
                "success": True
            }
        except Exception as e:
            response = {
                "success": False
            }
            
        modem.send(json.dumps(response))
        
    elif action == Minimodem.ACTION_MULTIPLE_CAPTURES_BY_COUNT:
        try:
            camera = Camera(camera_state=Camera.STATE_PENDING_CAPTURE)
            db.session.add(camera)
            db.session.commit()
        
            # Capture new image
            # TODO(jordanhuus): refactor to a simpler parameter set
            CaptureImage.multiple_captures(data["context"], data["capture-count"], camera.id, db)
            response = {
                "success": True,
                "camera-id": camera.id
            }
        except Exception as e:
            response = {
                "success": False
            }
        modem.send(json.dumps(response))
        
    elif action == Minimodem.ACTION_GET_CAMERA_STATE:
        try:
            camera = Camera.query.get(data["camera-session-id"])
            if camera.camera_state == Camera.STATE_COMPLETE:
                response ={
                    "success": True,
                    "camera-state": "complete"
                }
            elif camera.camera_state == Camera.STATE_PENDING_CAPTURE:
                response = {
                    "success": True,
                    "camera-state": "pending capture"
                }
        except Exception as e:
            response = {
                "success": False
            }
        modem.send(json.dumps(response))

    elif action == Minimodem.ACTION_SET_EXPOSURE_TIME:
        try:
            CaptureImage.set_exposure_time(data["exposure-time"], data["context"])
            response = {
                "success": True
            }
        except Exception as e:
            response = {
                "success": False
            }
        modem.send(json.dumps(response))
    
    elif action == Minimodem.ACTION_GET_EXPOSURE_TIME:
        try:
            exposure_time = CaptureImage.get_exposure_time(data["context"])
            response ={
                "success": True,
                "exposure-time": exposure_time
            }
        except Exception as e:
            response ={
                "success": False
            }
        modem.send(json.dumps(response))
        
    elif action == Minimodem.ACTION_SET_APERTURE:
        try:
            CaptureImage.set_f_number(data["f-number"])
            response = {
                "success": True
            }
        except Exception as e:
            response = {
                "success": False
            }
        modem.send(json.dumps(response))
    
    elif action == Minimodem.ACTION_SET_APERTURE_F_STOP:
        try:
            f_number_options = CaptureImage.set_f_number(data["f-number"], data["context"])
            response = {
                "success": True
            }
        except Exception as e:
            response = {
                "success": False
            }
        modem.send(json.dumps(response))
        
    elif action == Minimodem.ACTION_GET_APERTURE_OPTIONS:
        try:
            f_number_options = CaptureImage.get_f_number_options({"test": "TODO(jordanhuus): set context for GET requests"})
            response = {
                "success": True,
                "f-number-options": f_number_options
            }
        except Exception as e:
            response = {
                "success": False
            }
        modem.send(json.dumps(response))
        
    elif action == Minimodem.ACTION_GET_LENS_ID:
        try:
            lens_id = CaptureImage.get_lens_id()
            response = {
                "success": True,
                "lens-id": "unimplemented"
            }
        except Exception as E:
            response = {
                "success": False
            }
        modem.send(json.dumps(response))
        
    elif action == Minimodem.ACTION_GET_ISO_NUMBER:
        try:
            iso_number = CaptureImage.get_iso_number(data["context"])
            response = {
                "success": True,
                "iso-number": iso_number
            }
        except Exception as e:
            response = {
                "success": False
            }
        modem.send(json.dumps(response))
                   
    elif action == Minimodem.ACTION_SET_ISO_NUMBER:
        try:
            CaptureImage.set_iso_number(data["context"], data["iso-number"])
            response = {
                "success": True,
                "iso-number": data["iso-number"]
            }
        except Exception as e:
            response = {
                "success": False
            }
        modem.send(json.dumps(response))
        
    elif action == "hello_world":
        modem.send("well hello!")
        
    else:
        print("ERROR: Action not found...")
    

data = None
modem = Minimodem()
while True:
    data = modem.recieve("~")
    if data:
        process_data(modem, data, "~")
