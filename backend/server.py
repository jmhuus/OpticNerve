from flask import Flask, request, abort, jsonify
import CaptureImage
import os
from datetime import datetime
import time


app = Flask(__name__)


@app.route("/get-device-details", methods=["GET"])
def device_details():
    # Ensure body data
    try:
        device_details = CaptureImage.get_device_details()

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
        # Capture new image
        base_path = "/".join(os.path.dirname(os.path.realpath(__file__)).rsplit("/")[:-1])
        image_file_name = "latest_%s.jpg" % datetime.now().strftime("%Y_%m_%d_%H_%M_%S")
        file = open(f"{base_path}/frontend/dist/OpticNerve/assets/images/{image_file_name}", "wb")
        CaptureImage.capture_new_image(data["context"], file)

        return jsonify({
            "success": True,
            "image-path": f"assets/images/{image_file_name}",
            "context": request.get_json()["context"]
        })

    # TODO(jordanhuus): exception should remove newly created file
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
        # Set exposure time
        CaptureImage.set_exposure_time(data["exposure-time"], data["context"])
        return jsonify({
            "success": True,
            "exposure-time": data["exposure-time"],
            "context": data["context"]
        })
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
        # Set exposure time
        exposure_time = CaptureImage.get_exposure_time(data["context"])
        return jsonify({
            "success": True,
            "exposure-time": exposure_time,
            "context": data["context"]
        })
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
        # Set exposure time
        CaptureImage.set_f_number(data["f-number"])
        return jsonify({
            "success": True,
            "f-number": int(data["f-number"]/10),
            "context": data["context"]
        })
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        abort(500, e)


@app.route("/set-aperture-f-stop", methods=["POST"])
def set_aperture_f_stop():
    data = request.get_json()
    try:
        # Set exposure time
        f_number_options = CaptureImage.set_f_number(data["f-number"], data["context"])
        return jsonify({
            "success": True,
            "f-number": data["f-number"],
            "context": data["context"]
        })
    
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        abort(500, e)

        
@app.route("/get-aperture-options", methods=["POST"])
def get_aperture_options():
    data = request.get_json()
    try:
        # Set exposure time
        f_number_options = CaptureImage.get_f_number_options({"test": "TODO(jordanhuus): set context for GET requests"})
        return jsonify({
            "success": True,
            "f-number-options": f_number_options,
            "context": data["context"]
        })
    # TODO(jordanhuus): exception handling should be more specific
    except Exception as e:
        abort(500, e)


# TODO(jordanhuus): untested and unimplemented
@app.route("/get-lens-id", methods=["POST"])
def get_id_lens():
    try:
        # Set exposure time
        lens_id = CaptureImage.get_lens_id()
        return jsonify({
            "success": True,
            "lens-id": "unimplemented"
        })
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

@app.errorhandler(AuthError)
def not_authorized_error(error):
    return jsonify({
        "success": False,
        "error": error.status_code,
        "message": error.error
    }), error.status_code
