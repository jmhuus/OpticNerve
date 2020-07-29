from flask import Flask, request, abort, jsonify
from CaptureImage import capture_new_image, set_exposure_time
import os
from datetime import datetime
import time


app = Flask(__name__)


@app.route("/capture-image", methods=["POST"])
def capture_image():
    # Ensure body data
    # TODO(jordanhuus): change to decorator
    if "context" not in request.get_json().keys():
        abort(400, "Missing context object.")
            
    try:
        # Capture new image
        base_path = "/".join(os.path.dirname(os.path.realpath(__file__)).rsplit("/")[:-1])
        image_file_name = "latest_%s.jpg" % datetime.now().strftime("%Y_%m_%d_%H_%M_%S")
        file = open(f"{base_path}/frontend/dist/OpticNerve/assets/images/{image_file_name}", "wb")
        capture_new_image(file)

        return jsonify({
            "success": True,
            "image-path": f"assets/images/{image_file_name}",
            "context": request.get_json()["context"]
        })

    # TODO(jordanhuus): exception should remove newly created file
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
        set_exposure_time(data["exposure-time"])
        return jsonify({
            "success": True,
            "exposure-time": int(data["exposure-time"]/10),
            "context": data["context"]
        })
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
    message = str(error) if not None else "unauthorized"
    return jsonify({
        "success": False,
        "error": 422,
        "message": message
    }), 422

@app.errorhandler(404)
def page_not_found_error(error):
    message = str(error) if not None else "unprocessable"
    return jsonify({
        "success": False,
        "error": 404,
        "message": message
    }), 404

@app.errorhandler(400)
def bad_request_error(error):
    message = str(error) if not None else "bad request"
    return jsonify({
        "success": False,
        "error": 400,
        "message": message
    }), 400

@app.errorhandler(401)
def unauthorized_error(error):
    message = str(error) if not None else "unauthorized"
    return jsonify({
        "success": False,
        "error": 401,
        "message": message
    }), 401

o@app.errorhandler(500)
def internal_server_error(error):
    message = str(error) if not None else "server error"
    return jsonify({
        "success": False,
        "error": 500,
        "message": message
    }), 500

@app.errorhandler(AuthError)
def not_authorized_error(error):
    return jsonify({
        "success": False,
        "error": error.status_code,
        "message": error.error
    }), error.status_code
