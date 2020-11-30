import CaptureImage
from minimodem import Minimodem
import json


def process_data(modem, data):
    import pdb; pdb.set_trace()
    data = clean_data(data)
    data = json.loads(data)
    action = data["action"]
    data = data["data"] 

    if action == Minimodem.ACTION_GET_DEVICE_DETAILS:
        # Get device details
        device_details = CaptureImage.get_device_details()
        CaptureImage.test()
    elif action == Minimodem.ACTION_CAPTURE_IMAGE:
        # Capture new image
        CaptureImage.capture_new_image(data["context"])
        modem.send(json.dumps({"success": True}))
    elif action == Minimodem.ACTION_MULTIPLE_CAPTURES_BY_COUNT:
        camera = Camera(camera_state=Camera.STATE_PENDING_CAPTURE)
        db.session.add(camera)
        db.session.commit()
        
        # Capture new image
        # TODO(jordanhuus): refactor to a simpler parameter set
        CaptureImage.multiple_captures(data["context"], data["capture-count"], camera.id, db)
    elif action == Minimodem.ACTION_GET_CAMERA_STATE:
        # Check camera state
        camera = Camera.query.get(data["camera-session-id"])
        if camera.camera_state == Camera.STATE_COMPLETE:
            return jsonify({
                "success": True,
                "camera-state": "complete",
                "image-path": f"assets/images/{camera.image_file_name}"
            })
        elif camera.camera_state == Camera.STATE_PENDING_CAPTURE:
            return jsonify({
                "success": True,
                "camera-state": "pending capture",
                "image-path": f"assets/images/{camera.image_file_name}"
            })
    elif action == Minimodem.ACTION_SET_EXPOSURE_TIME:
        # Set exposure time
        CaptureImage.set_exposure_time(data["exposure-time"], data["context"])
        return jsonify({
            "success": True,
            "exposure-time": data["exposure-time"],
            "context": data["context"]
        })
    elif action == Minimodem.ACTION_GET_EXPOSURE_TIME:
        # Set exposure time
        exposure_time = CaptureImage.get_exposure_time(data["context"])
        return jsonify({
            "success": True,
            "exposure-time": exposure_time,
            "context": data["context"]
        })
    elif action == Minimodem.ACTION_SET_APERTURE:
        # Set exposure time
        CaptureImage.set_f_number(data["f-number"])
        return jsonify({
            "success": True,
            "f-number": int(data["f-number"]/10),
            "context": data["context"]
        })
    elif action == Minimodem.ACTION_SET_APERTURE_F_STOP:
        # Set exposure time
        f_number_options = CaptureImage.set_f_number(data["f-number"], data["context"])
        return jsonify({
            "success": True,
            "f-number": data["f-number"],
            "context": data["context"]
        })
    elif action == Minimodem.ACTION_GET_APERTURE_OPTIONS:
        # Set exposure time
        f_number_options = CaptureImage.get_f_number_options({"test": "TODO(jordanhuus): set context for GET requests"})
        return jsonify({
            "success": True,
            "f-number-options": f_number_options,
            "context": data["context"]
        })
    elif action == Minimodem.ACTION_GET_LENS_ID:
        # Set exposure time
        lens_id = CaptureImage.get_lens_id()
        return jsonify({
            "success": True,
            "lens-id": "unimplemented"
        })
    elif action == Minimodem.ACTION_GET_ISO_NUMBER:
        # Set exposure time
        iso_number = CaptureImage.get_iso_number(data["context"])
        return jsonify({
            "success": True,
            "iso-number": iso_number
        })
    elif action == Minimodem.ACTION_SET_ISO_NUMBER:
        # Set exposure time
        CaptureImage.set_iso_number(data["context"], data["iso-number"])
        return jsonify({
            "success": True,
            "iso-number": data["iso-number"]
        })
    elif action == "hello_world":
        modem.send("well hello!")
    else:
        print("ERROR: Action not found...")


def clean_data(data):
    return data.replace(".", "").replace("\n", "")
    
    

data = None
modem = Minimodem()
while True:
    data = modem.recieve("end")
    if data:
        process_data(modem, data)
