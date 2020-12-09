from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from datetime import datetime
from model import setup_db
import os
import time
from model import Camera
from minimodem import Minimodem
import json
import CaptureImage


app = Flask(__name__)


# Set up database
db = setup_db(app)
migrate = Migrate(app, db)


@app.route("/")
def home():
    return "hello world"


@app.route("/get-device-details", methods=["GET"])
def device_details():
    """
    JSON requirements:
     - context
     - device-type
    """

    if data["context"]["device-type"] == "local":
        try:
            # Get device details
            device_details = CaptureImage.get_device_details()
            return jsonify({
                "success": True,
                "device-details": device_details,
                "context": data["context"]
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["context"]["device-type"] == "radio":
        try:
            tx_data = {
                "action": Minimodem.ACTION_GET_DEVICE_DETAILS,
                "data": data
            }
            modem = Minimodem()
            response = modem.transmit(json.dumps(tx_data))
            response = json.loads(response)
            return jsonify({
                "success": True,
                "device-details": response["device-details"]
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["context"]["device-type"])
        )
        

@app.route("/capture-image", methods=["POST"])
def capture_image():
    """
    JSON requirements:
     - context
     - device-type
    """
    
    data = request.get_json()

    # Ensure body data
    if "context" not in data.keys():
        abort(400, "Missing context object.")

    # Connected via USB
    if data["context"]["device-type"] == "local":
        try:
            # Capture new image
            CaptureImage.capture_new_image(data["context"])
            return jsonify({
                "success": True,
                "context": data["context"]
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["context"]["device-type"] == "radio":
        try:
            tx_data = {
                "action": Minimodem.ACTION_CAPTURE_IMAGE,
                "data": data
            }
            modem = Minimodem()
            response = modem.transmit(json.dumps(tx_data))
            response = json.loads(response)
            return jsonify({
                "success": True,
                "context": data["context"]
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["context"]["device-type"])
        )


@app.route("/multiple-captures-by-count", methods=["POST"])
def capture_images_count():
    """
    JSON requirements:
     - context
     - device-type
     - capture-count
    """
    
    data = request.get_json()
    
    # Ensure body data
    # TODO(jordanhuus): change to decorator
    if "capture-count" not in data.keys():
        abort(400, "Missing 'capture-count' data.")
    elif "context" not in data.keys():
        abort(400, "Missing context object.")

    # Connected via USB
    if data["context"]["device-type"] == "local":
        try:
            camera = Camera(camera_state=Camera.STATE_PENDING_CAPTURE)
            db.session.add(camera)
            db.session.commit()
        
            # Capture new image
            # TODO(jordanhuus): refactor to a simpler parameter set
            CaptureImage.multiple_captures(
                data["context"],
                data["capture-count"],
                camera.id,
                db
            )

            return jsonify({
                "success": True,
                "context": data["context"]
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["context"]["device-type"] == "radio":
        try:
            tx_data = {
                "action": Minimodem.ACTION_MULTIPLE_CAPTURES_BY_COUNT,
                "data": data
            }
            modem = Minimodem()
            response = modem.transmit(json.dumps(tx_data))
            response = json.loads(response)
            return jsonify({
                "success": True,
                "context": data["context"]
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["context"]["device-type"])
        )


@app.route("/get-camera-state", methods=["POST"])
def get_camera_state():
    """
    JSON requirements:
     - context
     - device-type
    """
    
    data = request.get_json()
    
    # Ensure body data
    # TODO(jordanhuus): change to decorator
    if "camera-session-id" not in data.keys():
        abort(400, "Missing 'camera-session-id' data.")
    elif "context" not in data.keys():
        abort(400, "Missing context object.")

    # Connected via USB
    if data["context"]["device-type"] == "local":
        try:
            # Check camera state
            camera = Camera.query.get(data["camera-session-id"])
            return jsonify({
                "success": True,
                "camera-state": camera.camera_state,
                "context": data["context"]
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["context"]["device-type"] == "radio":
        try:
            tx_data = {
                "action": Minimodem.ACTION_GET_CAMERA_STATE,
                "data": data
            }
            modem = Minimodem()
            response = modem.transmit(json.dumps(tx_data))
            response = json.loads(response)
            return jsonify({
                "success": True,
                "camera-state": response["camera-state"],
                "context": data["context"]
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["context"]["device-type"])
        )


@app.route("/set-exposure-time", methods=["POST"])
def set_exposure():
    """
    JSON requirements:
     - context
     - device-type
     - exposure-time
    """
    
    data = request.get_json()
    
    # Ensure body data
    if "exposure-time" not in data.keys():
        abort(400, "Missing 'exposure-time' object.")
    elif "context" not in data.keys():
        abort(400, "Missing context object.")

    # Connected via USB
    if data["context"]["device-type"] == "local":
        try:
            # Set exposure time
            CaptureImage.set_exposure_time(data["exposure-time"], data["context"])
            return jsonify({
                "success": True,
                "context": data["context"]
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["context"]["device-type"] == "radio":
        try:
            tx_data = {
                "action": Minimodem.ACTION_SET_EXPOSURE_TIME,
                "data": data
            }
            modem = Minimodem()
            response = modem.transmit(json.dumps(tx_data))
            response = json.loads(response)
            return jsonify({
                "success": True,
                "context": data["context"]
            })
        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["context"]["device-type"])
        )

        
@app.route("/get-exposure-time", methods=["POST"])
def gete_exposure():
    """
    JSON requirements:
     - context
     - device-type
    """
    
    data = request.get_json()
    
    # Ensure body data
    if "context" not in data.keys():
        abort(400, "Missing context object.")

    # Connected via USB
    if data["context"]["device-type"] == "local":
        try:
            exposure_time = CaptureImage.get_exposure_time(data["context"])
            return jsonify({
                "success": True,
                "exposure-time": exposure_time,
                "context": data["context"]
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["context"]["device-type"] == "radio":
        try:
            tx_data = {
                "action": Minimodem.ACTION_GET_EXPOSURE_TIME,
                "data": data
            }
            modem = Minimodem()
            response = modem.transmit(json.dumps(tx_data))
            response = json.loads(response)
            return jsonify({
                "success": True,
                "exposure-time": response["exposure-time"],
                "context": data["context"]
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["context"]["device-type"])
        )


@app.route("/set-aperture", methods=["POST"])
def set_aperture():
    """
    JSON requirements:
     - context
     - device-type
     - f-number
    """
    
    data = request.get_json()
    
    # Ensure body data
    if "f-number" not in data.keys():
        abort(400, "Missing 'exposure-time' object.")
    if "context" not in data.keys():
        abort(400, "Missing context object.")
        context = data["context"]

    # Connected via USB
    if data["context"]["device-type"] == "local":
        try:
            CaptureImage.set_f_number(data["f-number"])
            return jsonify({
                "success": True,
                "f-number": int(data["f-number"]/10),
                "context": data["context"]
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["context"]["device-type"] == "radio":
        try:
            tx_data = {
                "action": Minimodem.ACTION_SET_APERTURE,
                "data": data
            }
            modem = Minimodem()
            response = modem.transmit(json.dumps(tx_data))
            response = json.loads(response)
            return jsonify({
                "success": True,
                "context": data["context"]
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["context"]["device-type"])
        )


@app.route("/set-aperture-f-stop", methods=["POST"])
def set_aperture_f_stop():
    """
    JSON requirements:
     - context
     - device-type
     - f-number
    """
    
    data = request.get_json()

    # Connected via USB
    if data["context"]["device-type"] == "local":
        try:
            # Set exposure time
            f_number_options = CaptureImage.set_f_number(data["f-number"], data["context"])
            return jsonify({
                "success": True,
                "context": data["context"]
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["context"]["device-type"] == "radio":
        try:
            tx_data = {
                "action": Minimodem.ACTION_SET_APERTURE_F_STOP,
                "data": data
            }
            modem = Minimodem()
            response = modem.transmit(json.dumps(tx_data))
            response = json.loads(response)
            return jsonify({
                "success": True,
                "context": data["context"]
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["context"]["device-type"])
        )

        
@app.route("/get-aperture-options", methods=["POST"])
def get_aperture_options():
    """
    JSON requirements:
     - context
     - device-type
     - f-number
    """
    
    data = request.get_json()

    # Connected via USB
    if data["context"]["device-type"] == "local":
        try:
            # Get exposure options
            f_number_options = CaptureImage.get_f_number_options({"test": "TODO(jordanhuus): set context for GET requests"})
            return jsonify({
                "success": True,
                "aperture-options": f_number_options,
                "context": data["context"]
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["context"]["device-type"] == "radio":
        try:
            tx_data = {
                "action": Minimodem.ACTION_GET_APERTURE_OPTIONS,
                "data": data
            }
            modem = Minimodem()
            response = modem.transmit(json.dumps(tx_data))
            response = json.loads(response)
            return jsonify({
                "success": True,
                "aperture-options": response["aperture-options"],
                "context": data["context"]
            })
        
        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["context"]["device-type"])
        )

        
# TODO(jordanhuus): untested and unimplemented
@app.route("/get-lens-id", methods=["POST"])
def get_id_lens():
    """
    JSON requirements:
     - context
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
        abort(500, e)


@app.route("/get-iso-number", methods=["POST"])
def get_iso_number():
    """
    JSON requirements:
     - context
     - device-type
    """

    data = request.get_json()

    # Connected via USB
    if data["context"]["device-type"] == "local":
        try:
            # Get exposure time
            iso_number = CaptureImage.get_iso_number(data["context"])
            return jsonify({
                "success": True,
                "iso-number": iso_number,
                "context": data["context"]
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["context"]["device-type"] == "radio":
        try:
            tx_data = {
                "action": Minimodem.ACTION_GET_ISO_NUMBER,
                "data": data
            }
            modem = Minimodem()
            response = modem.transmit(json.dumps(tx_data))
            response = json.loads(response)
            return jsonify({
                "success": True,
                "iso-number": response["iso-number"],
                "context": data["context"]
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["context"]["device-type"])
        )
    

@app.route("/set-iso-number", methods=["POST"])
def set_iso_number():
    """
    JSON requirements:
     - context
     - device-type
     - f-number
    """
    
    data = request.get_json()

    # Connected via USB
    if data["context"]["device-type"] == "local":
        try:
            # Set exposure time
            CaptureImage.set_iso_number(data["context"], data["iso-number"])
            return jsonify({
                "success": True,
                "iso-number": data["iso-number"]
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["context"]["device-type"] == "radio":
        try:
            tx_data = {
                "action": Minimodem.ACTION_CAPTURE_IMAGE,
                "data": data
            }
            modem = Minimodem()
            response = modem.transmit(json.dumps(tx_data))
            response = json.loads(response)
            return jsonify(response)

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["context"]["device-type"])
        )
        
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
