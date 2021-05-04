from flask import Flask, request, abort, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from datetime import datetime
from model import setup_db
import os
import sys
import time
from model import Camera
import json
import CaptureImage
import time
import subprocess
import platform
import utils


app = Flask(__name__)
CORS(app)


# Set up database
db = setup_db(app)
migrate = Migrate(app, db)


@app.route("/")
def home():
    path_to_check = utils.get_base_application_path()
    return "hello world <br>" + \
        path_to_check + "<br>\n"


@app.route("/get-ptp-device-ids")
def get_ptp_devices():
    try:
        device_ids = CaptureImage.get_usb_device_ids()
        return jsonify({
            "success": True,
            "device-ids": device_ids
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })    


@app.route("/get-device-details", methods=["POST"])
def device_details():
    """
    JSON requirements:
     - device-type
    """
    
    data = request.get_json()

    try:
        # Get device details
        device_details = CaptureImage.get_device_details()
        return jsonify({
            "success": True,
            "device-details": device_details
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })
        

@app.route("/capture-image", methods=["POST"])
def capture_image():
    """
    HTTP JSON request requirements:
     - device-type
    """

    data = request.get_json()

    try:
        # Capture new image
        image_file_name = CaptureImage.capture_new_image()
        return jsonify({
            "success": True,
            "image-name": image_file_name
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })


@app.route("/multiple-captures-by-count", methods=["POST"])
def capture_images_count():
    """
    JSON requirements:
     - device-type
     - capture-count
    """
    
    data = request.get_json()
    
    # Ensure body data
    # TODO(jordanhuus): change to decorator
    if "capture-count" not in data.keys():
        abort(400, "Missing 'capture-count' data.")

    try:
        camera = Camera(camera_state=Camera.STATE_PENDING_CAPTURE)
        db.session.add(camera)
        db.session.commit()
        
        # Capture new image
        # TODO(jordanhuus): refactor to a simpler parameter set
        CaptureImage.multiple_captures(
            data["capture-count"],
            camera.id,
            db
        )

        return jsonify({
            "success": True,
            "camera-session-id": camera.id
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })
    

@app.route("/get-camera-state", methods=["POST"])
def get_camera_state():
    """
    JSON requirements:
     - device-type
    """
    
    data = request.get_json()
    
    # Ensure body data
    # TODO(jordanhuus): change to decorator
    if "camera-session-id" not in data.keys():
        abort(400, "Missing 'camera-session-id' data.")

    try:
        # Check camera state
        camera = Camera.query.get(data["camera-session-id"])
        print("image file name from Camera ORM object: ", camera.image_file_name)
        return jsonify({
            "success": True,
            "camera-state": "complete" if camera.camera_state==2 else "pending",
            "image-name": camera.image_file_name
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })


@app.route("/set-exposure-time", methods=["POST"])
def set_exposure():
    """
    JSON requirements:
     - device-type
     - exposure-time
    """

    data = request.get_json()
    
    # Ensure body data
    if "exposure-time" not in data.keys():
        abort(400, "Missing 'exposure-time' object.")

    try:
        # Set exposure time
        CaptureImage.set_exposure_time(data["exposure-time"])
        return jsonify({
            "success": True
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })

        
@app.route("/get-exposure-time", methods=["POST"])
def gete_exposure():
    """
    JSON requirements:
     - device-type
    """
    
    data = request.get_json()
    
    try:
        exposure_time = CaptureImage.get_exposure_time()
        return jsonify({
            "success": True,
            "exposure-time": exposure_time
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })


@app.route("/set-aperture-f-stop", methods=["POST"])
def set_aperture():
    """
    JSON requirements:
     - device-type
     - f-number
    """
    
    data = request.get_json()
    
    # Ensure body data
    if "f-number" not in data.keys():
        abort(400, "Missing 'exposure-time' object.")

    try:
        CaptureImage.set_f_number(data["f-number"])
        return jsonify({
            "success": True
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })


@app.route("/get-aperture-f-stop", methods=["POST"])
def set_aperture_f_stop():
    """
    JSON requirements:
     - device-type
    """
    
    data = request.get_json()

    try:
        # Set exposure time
        f_number = CaptureImage.get_f_number()
        return jsonify({
            "success": True,
            "f-number": f_number
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })

        
@app.route("/get-aperture-options", methods=["POST"])
def get_aperture_options():
    """
    JSON requirements:
     - device-type
     - f-number
    """
    
    data = request.get_json()

    try:
        # Get exposure options
        f_stop_type, minimum_f_stop_index, maximum_f_stop_index = \
            CaptureImage.get_f_number_options()
        return jsonify({
            "success": True,
            "f-number-options": {
                "f-stop-type": f_stop_type,
                "minimum-f-stop": minimum_f_stop_index,
                "maximum-f-stop": maximum_f_stop_index
            }
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })

    
# TODO(jordanhuus): untested and unimplemented
@app.route("/get-lens-id", methods=["POST"])
def get_id_lens():
    """
    JSON requirements:
     - device-type
    """
    
    data = request.get_json()

    try:
        tx_data = {
            "action": Minimodem.ACTION_GET_LENS_ID,
            "data": None
        }
        modem = Minimodem()
        modem.transmit(json.dumps(tx_data))
            
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })

    
@app.route("/get-iso-number", methods=["POST"])
def get_iso_number():
    """
    JSON requirements:
     - device-type
    """

    data = request.get_json()

    try:
        # Get exposure time
        iso_number = CaptureImage.get_iso_number()
        return jsonify({
            "success": True,
            "iso-number": iso_number
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })


@app.route("/set-iso-number", methods=["POST"])
def set_iso_number():
    """
    JSON requirements:
     - device-type
     - iso-number
    """
    
    data = request.get_json()

    try:
        # Set exposure time
        CaptureImage.set_iso_number(data["iso-number"])
        return jsonify({
            "success": True,
            "iso-number": data["iso-number"]
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })


@app.route("/open-file-browser")
def open_file_browser():
    """
    JSON requirements:
     - file path location
    """

    try:
        base_path = "/".join(os.path.dirname(os.path.realpath(__file__)).rsplit("/")[:-1])
        file_path = f"{base_path}/OpticNerve/dist/OpticNerve/assets/images/"
        
        subprocess.call(
            [
                "{}/OpticNerve/backend/dist/server/open_file_explorer.sh".format(base_path),
                platform.system(),
                file_path
            ]
        )
        return jsonify({
            "success": True
        })

    except Exception as e:
        print("problem opening file browser...: {}".format(e))
        return jsonify({
            "success": False,
            "error": str(e)
        })

    
@app.route("/images/<path:image_name>")
def get_image(image_name):
    try:
        STOCK_IMAGE_NAME = "milky_way_image_pending.jpg"
        if image_name == STOCK_IMAGE_NAME:
            return send_from_directory(
                utils.get_base_application_path() + "backend/images/",
                STOCK_IMAGE_NAME
            )
        
        return send_from_directory(
            utils.ensure_path_available(
                os.path.expanduser("~")+"/Documents/optic-nerve/images/"),
            image_name
        )

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })


def shutdown():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Not running with the Werkzeug Server')
    func()

    
@app.route("/shutdown-server")
def shutdown_server():
    print("Shutting down the Python server...")
    shutdown()


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)


# Error Handling
@app.errorhandler(422)
def unprocessable_error(error):
    return jsonify({
        "success": False,
        "error": 422,
        "message": error.description if not None else "unauthorized"
    }), 422

@app.errorhandler(404)
def page_not_found_error(error):
    return jsonify({
        "success": False,
        "error": 404,
        "message": error.description if not None else "unprocessable"
    }), 404

@app.errorhandler(400)
def bad_request_error(error):
    return jsonify({
        "success": False,
        "error": 400,
        "message": error.description if not None else "bad request"
    }), 400

@app.errorhandler(401)
def unauthorized_error(error):
    return jsonify({
        "success": False,
        "error": 401,
        "message": error.description if not None else "unauthorized"
    }), 401

@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({
        "success": False,
        "error": 500,
        "message": error.description if not None else "server error"
    }), 500
