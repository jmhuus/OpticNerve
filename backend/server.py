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
import action_request_pb2


app = Flask(__name__)


# Set up database
db = setup_db(app)
migrate = Migrate(app, db)


@app.route("/")
def home():
    return "hello world"


@app.route("/get-device-details", methods=["POST"])
def device_details():
    """
    JSON requirements:
     - device-type
    """
    
    data = request.get_json()

    if data["device-type"] == "local":
        try:
            # Get device details
            device_details = CaptureImage.get_device_details()
            return jsonify({
                "success": True,
                "device-details": device_details
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["device-type"] == "radio":
        try:
            # Construct protobuf request
            action_request = action_request_pb2.ActionRequest()
            action_request.action = action_request_pb2.ActionRequest.ACTION_GET_DEVICE_DETAILS
            modem = Minimodem()
            response = modem.transmit(action_request.SerializeToString().hex())

            # Deconstruct protobuf response
            action_response = action_request_pb2.ActionRequest()
            action_response.ParseFromString(bytes.fromhex(response))
            return jsonify({
                "success": action_response.response_successful,
                "device-details": {
                    "capture_formats": [i for i in action_response.device_details.capture_formats],
                    "device_version": action_response.device_details.device_version,
                    "manufacturer": action_response.device_details.manufacturer,
                    "model": action_response.device_details.model
                }
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["device-type"])
        )
        

@app.route("/capture-image", methods=["POST"])
def capture_image():
    """
    HTTP JSON request requirements:
     - device-type
    """

    data = request.get_json()

    # Connected via USB
    if data["device-type"] == "local":
        try:
            # Capture new image
            base_path = "/".join(os.path.dirname(os.path.realpath(__file__)).rsplit("/")[:-1])
            image_file_name = "latest_%s.jpg" % datetime.now().strftime("%Y_%m_%d_%H_%M_%S")
            output_path = f"{base_path}/frontend/dist/OpticNerve/assets/images/{image_file_name}"
            CaptureImage.capture_new_image(save_path=output_path)
            return jsonify({
                "success": True,
                "image-path": output_path
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["device-type"] == "radio":
        try:
            # Serialize data into protobuf
            action_request = action_request_pb2.ActionRequest()
            action_request.action = action_request_pb2.ActionRequest.ACTION_CAPTURE_IMAGE
            modem = Minimodem()
            response = modem.transmit(action_request.SerializeToString().hex())

            # Desrialize data from protobuf
            action_response = action_request_pb2.ActionRequest()
            action_response.ParseFromString(bytes.fromhex(response))
            return jsonify({
                "success": action_response.response_successful
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["device-type"])
        )


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

    # Connected via USB
    if data["device-type"] == "local":
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
                "success": True
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["device-type"] == "radio":
        try:
            # Serialize data into protobuf
            action_request = action_request_pb2.ActionRequest()
            action_request.action = action_request_pb2.ActionRequest.ActionRequest.ACTION_MULTIPLE_CAPTURES_BY_COUNT
            modem = Minimodem()
            response = modem.transmit(action_request.SerializeToString().hex())

            # Desrialize data from protobuf
            action_response = action_request_pb2.ActionRequest()
            action_response.ParseFromString(bytes.fromhex(response))
            return jsonify({
                "success": action_response.response_successful
            })
        
        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(["device-type"])
        )


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

    # Connected via USB
    if data["device-type"] == "local":
        try:
            # Check camera state
            camera = Camera.query.get(data["camera-session-id"])
            return jsonify({
                "success": True,
                "camera-state": camera.camera_state
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["device-type"] == "radio":
        try:
            # Serialize data into protobuf
            action_request = action_request_pb2.ActionRequest()
            action_request.action = action_request_pb2.ActionRequest.ActionRequest.ACTION_GET_CAMERA_STATE

            modem = Minimodem()
            response = modem.transmit(action_request.SerializeToString().hex())

            # Desrialize data from protobuf
            action_response = action_request_pb2.ActionRequest()
            action_response.ParseFromString(bytes.fromhex(response))
            return jsonify({
                "success": action_response.response_successful,
                "camera-state": action_response.camera_state
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["device-type"])
        )


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

    # Connected via USB
    if data["device-type"] == "local":
        try:
            # Set exposure time
            CaptureImage.set_exposure_time(data["exposure-time"])
            return jsonify({
                "success": True
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["device-type"] == "radio":
        try:
            # Serialize data into protobuf
            action_request = action_request_pb2.ActionRequest()
            action_request.action = action_request_pb2.ActionRequest.ACTION_SET_EXPOSURE_TIME
            action_request.exposure_time = data["exposure-time"]
            modem = Minimodem()
            response = modem.transmit(action_request.SerializeToString().hex())

            # Desrialize data from protobuf
            action_response = action_request_pb2.ActionRequest()
            action_response.ParseFromString(bytes.fromhex(response))
            return jsonify({
                "success": action_response.response_successful
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["device-type"])
        )

        
@app.route("/get-exposure-time", methods=["POST"])
def gete_exposure():
    """
    JSON requirements:
     - device-type
    """
    
    data = request.get_json()
    
    # Connected via USB
    if data["device-type"] == "local":
        try:
            exposure_time = CaptureImage.get_exposure_time()
            return jsonify({
                "success": True,
                "exposure-time": exposure_time
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["device-type"] == "radio":
        try:
            # Serialize data into protobuf
            action_request = action_request_pb2.ActionRequest()
            action_request.action = action_request_pb2.ActionRequest.ACTION_GET_EXPOSURE_TIME
            modem = Minimodem()
            response = modem.transmit(action_request.SerializeToString().hex())

            # Desrialize data from protobuf
            action_response = action_request_pb2.ActionRequest()
            action_response.ParseFromString(bytes.fromhex(response))
            return jsonify({
                "success": action_response.response_successful,
                "expsure-time": action_response.exposure_time
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["device-type"])
        )


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

    # Connected via USB
    if data["device-type"] == "local":
        try:
            CaptureImage.set_f_number(data["f-number"], {"name": "jordan"}) # TODO(jordanhuus): remove hard coded
            return jsonify({
                "success": True
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["device-type"] == "radio":
        try:
            # Serialize data into protobuf
            action_request = action_request_pb2.ActionRequest()
            action_request.action = action_request_pb2.ActionRequest.ACTION_SET_APERTURE_F_STOP
            action_request.f_number = data["f-number"]
            modem = Minimodem()
            response = modem.transmit(action_request.SerializeToString().hex())

            # Desrialize data from protobuf
            action_response = action_request_pb2.ActionRequest()
            action_response.ParseFromString(bytes.fromhex(response))
            return jsonify({
                "success": action_response.response_successful
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["device-type"])
        )


@app.route("/get-aperture-f-stop", methods=["POST"])
def set_aperture_f_stop():
    """
    JSON requirements:
     - device-type
    """
    
    data = request.get_json()

    # Connected via USB
    if data["device-type"] == "local":
        try:
            # Set exposure time
            f_number = CaptureImage.get_f_number(    )
            return jsonify({
                "success": True,
                "f-number": f_number
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["device-type"] == "radio":
        try:
            # Serialize data into protobuf
            action_request = action_request_pb2.ActionRequest()
            action_request.action = action_request_pb2.ActionRequest.ACTION_GET_APERTURE_F_STOP
            modem = Minimodem()
            response = modem.transmit(action_request.SerializeToString().hex())

            # Desrialize data from protobuf
            action_response = action_request_pb2.ActionRequest()
            action_response.ParseFromString(bytes.fromhex(response))
            return jsonify({
                "success": action_response.response_successful,
                "f-number": action_response.f_number
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["device-type"])
        )

        
@app.route("/get-aperture-options", methods=["POST"])
def get_aperture_options():
    """
    JSON requirements:
     - device-type
     - f-number
    """
    
    data = request.get_json()
    import pdb; pdb.set_trace()

    # Connected via USB
    if data["device-type"] == "local":
        try:
            # Get exposure options
            f_number_options = CaptureImage.get_f_number_options()
            return jsonify({
                "success": True,
                "f-number-options": f_number_options
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["device-type"] == "radio":
        try:
            # Serialize data into protobuf
            action_request = action_request_pb2.ActionRequest()
            action_request.action = action_request_pb2.ActionRequest.ACTION_GET_APERTURE_OPTIONS
            modem = Minimodem()
            response = modem.transmit(action_request.SerializeToString().hex())

            # Desrialize data from protobuf
            action_response = action_request_pb2.ActionRequest()
            action_response.ParseFromString(bytes.fromhex(response))
            return jsonify({
                "success": action_response.response_successful,
                "aperture-options": [i for i in action_response.aperture_options]
            })
        
        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["device-type"])
        )

        
# TODO(jordanhuus): untested and unimplemented
@app.route("/get-lens-id", methods=["POST"])
def get_id_lens():
    """
    JSON requirements:
     - device-type
    """
    
    data = request.get_json()

    if data["device-type"] == "local":
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
            
    elif data["device-type"] == "radio":
        # Serialize data into protobuf
        action_request = action_request_pb2.ActionRequest()
        action_request.action = action_request_pb2.ActionRequest.ACTION_GET_LENS_ID
        modem = Minimodem()
        response = modem.transmit(action_request.SerializeToString().hex())
        
        # Desrialize data from protobuf
        action_response = action_request_pb2.ActionRequest()
        action_response.ParseFromString(bytes.fromhex(response))
        return jsonify({
            "success": action_response.response_successful,
            "lens-id": action_response.lens_id
        })


@app.route("/get-iso-number", methods=["POST"])
def get_iso_number():
    """
    JSON requirements:
     - device-type
    """

    data = request.get_json()

    # Connected via USB
    if data["device-type"] == "local":
        try:
            # Get exposure time
            iso_number = CaptureImage.get_iso_number()
            return jsonify({
                "success": True,
                "iso-number": iso_number
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["device-type"] == "radio":
        try:
            # Serialize data into protobuf
            action_request = action_request_pb2.ActionRequest()
            action_request.action = action_request_pb2.ActionRequest.ACTION_GET_ISO_NUMBER
            modem = Minimodem()
            response = modem.transmit(action_request.SerializeToString().hex())
            
            # Desrialize data from protobuf
            action_response = action_request_pb2.ActionRequest()
            action_response.ParseFromString(bytes.fromhex(response))
            return jsonify({
                "success": action_response.response_successful,
                "iso-number": action_response.iso_number
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["device-type"])
        )
    

@app.route("/set-iso-number", methods=["POST"])
def set_iso_number():
    """
    JSON requirements:
     - device-type
     - f-number
    """
    
    data = request.get_json()

    # Connected via USB
    if data["device-type"] == "local":
        try:
            # Set exposure time
            CaptureImage.set_iso_number(data["iso-number"])
            return jsonify({
                "success": True,
                "iso-number": data["iso-number"]
            })
        except Exception as e:
            abort(500, e)

    # Remote communication via packet radio
    elif data["device-type"] == "radio":
        try:
            # Serialize data into protobuf
            action_request = action_request_pb2.ActionRequest()
            action_request.action = action_request_pb2.ActionRequest.ActionRequest.ACTION_CAPTURE_IMAGE
            action_request.iso_number = data["iso-number"]
            modem = Minimodem()
            response = modem.transmit(action_request.SerializeToString().hex())
            
            # Desrialize data from protobuf
            action_response = action_request_pb2.ActionRequest()
            action_response.ParseFromString(bytes.fromhex(response))
            return jsonify({
                "success": action_response.response_successful
            })

        except Exception as e:
            abort(500, e)
    else:
        abort(
            500,
            "Device {} not allowed. Only 'local' and 'radio' options allowed.".format(data["device-type"])
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
