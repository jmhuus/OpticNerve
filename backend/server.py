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


app = Flask(__name__)


# Set up database
db = setup_db(app)
migrate = Migrate(app, db)


@app.route("/")
def home():
    return "hello world"


@app.route("/get-device-details", methods=["GET"])
def device_details():
    # Ensure body data
    try:
        tx_data = {
            "action": Minimodem.ACTION_GET_DEVICE_DETAILS,
            "data": data
        }
        modem = Minimodem()
        modem.transmit(json.dumps(tx_data))
        
        return jsonify({
            "success": True,
            "device-details": device_details
        })

    # TODO(jordanhuus): exception should remove newly created file
    except Exception as e:
        abort(500, e)    


@app.route("/capture-image", methods=["POST"])
def capture_image():
    data = request.get_json()
    # Ensure body data
    # TODO(jordanhuus): change to decorator
    if "context" not in data.keys():
        abort(400, "Missing context object.")
        
    try:
        tx_data = {
            "action": Minimodem.ACTION_CAPTURE_IMAGE,
p            "data": data
        }
        modem = Minimodem()
        response = modem.transmit(json.dumps(tx_data))

        print("Response recieved")
        print(response)
        
        return jsonify({
            "success": True
            # "context": data["context"]
            # "image-path": f"assets/images/{image_file_name}"
        })

    # TODO(jordanhuus): exception should remove newly created file
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        abort(500, e)


@app.route("/multiple-captures-by-count", methods=["POST"])
def capture_images_count():
    data = request.get_json()
    # Ensure body data
    # TODO(jordanhuus): change to decorator
    if "capture-count" not in data.keys():
        abort(400, "Missing 'capture-count' data.")
    elif "context" not in data.keys():
        abort(400, "Missing context object.")
        
    try:
        tx_data = {
            "action": Minimodem.ACTION_MULTIPLE_CAPTURES_BY_COUNT,
            "data": data
        }
        modem = Minimodem()
        modem.transmit(json.dumps(tx_data))
        
        return jsonify({
            "success": True,
            "context": data["context"],
            "capture-count": data["capture-count"],
            "camera-session-id": camera.id
        })
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        abort(500, e)


@app.route("/get-camera-state", methods=["POST"])
def get_camera_state():
    data = request.get_json()
    # Ensure body data
    # TODO(jordanhuus): change to decorator
    if "camera-session-id" not in data.keys():
        abort(400, "Missing 'camera-session-id' data.")
    elif "context" not in data.keys():
        abort(400, "Missing context object.")
        
    try:
        tx_data = {
            "action": Minimodem.ACTION_GET_CAMERA_STATE,
            "data": data
        }
        modem = Minimodem()
        modem.transmit(json.dumps(tx_data))
        
        
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        abort(500, e)
        

@app.route("/set-exposure-time", methods=["POST"])
def set_exposure():
    data = request.get_json()
    # Ensure body data
    if "exposure-time" not in data.keys():
        abort(400, "Missing 'exposure-time' object.")
    elif "context" not in data.keys():
        abort(400, "Missing context object.")
        
    try:
        tx_data = {
            "action": Minimodem.ACTION_SET_CAMERA_STATE,
            "data": data
        }
        modem = Minimodem()
        modem.transmit(json.dumps(tx_data))
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        abort(500, e)

        
@app.route("/get-exposure-time", methods=["POST"])
def get_exposure():
    data = request.get_json()
    # Ensure body data
    if "context" not in data.keys():
        abort(400, "Missing context object.")
        
    try:
        tx_data = {
            "action": Minimodem.ACTION_GET_CAMERA_STATE,
            "data": data
        }
        modem = Minimodem()
        modem.transmit(json.dumps(tx_data))
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        abort(500, e)
        

@app.route("/set-aperture", methods=["POST"])
def set_aperture():
    data = request.get_json()
    # Ensure body data
    if "f-number" not in data.keys():
        abort(400, "Missing 'exposure-time' object.")
    elif "context" not in data.keys():
        abort(400, "Missing context object.")
        context = data["context"]

    try:
        tx_data = {
            "action": Minimodem.ACTION_SET_APERTURE,
            "data": data
        }
        modem = Minimodem()
        modem.transmit(json.dumps(tx_data))
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        abort(500, e)


@app.route("/set-aperture-f-stop", methods=["POST"])
def set_aperture_f_stop():
    data = request.get_json()
    try:
        tx_data = {
            "action": Minimodem.ACTION_SET_APERTURE_F_STOP,
            "data": data
        }
        modem = Minimodem()
        modem.transmit(json.dumps(tx_data))
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        abort(500, e)

        
@app.route("/get-aperture-options", methods=["POST"])
def get_aperture_options():
    data = request.get_json()
    try:
        tx_data = {
            "action": Minimodem.ACTION_GET_APERTURE_OPTIONS,
            "data": data
        }
        modem = Minimodem()
        modem.transmit(json.dumps(tx_data))
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        abort(500, e)


# TODO(jordanhuus): untested and unimplemented
@app.route("/get-lens-id", methods=["POST"])
def get_id_lens():
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
    data = request.get_json()
    try:
        tx_data = {
            "action": Minimodem.ACTION_GET_ISO_NUMBER,
            "data": data
        }
        modem = Minimodem()
        modem.transmit(json.dumps(tx_data))
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        abort(500, e)


@app.route("/set-iso-number", methods=["POST"])
def set_iso_number():
    data = request.get_json()
    try:
        tx_data = {
            "action": Minimodem.ACTION_SET_ISO_NUMBER,
            "data": data
        }
        modem = Minimodem()
        modem.transmit(json.dumps(tx_data))
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        abort(500, e)

        
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
