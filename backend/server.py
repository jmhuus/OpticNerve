from flask import Flask, request, abort, jsonify
from flask_cors import cross_origin
from CaptureImage import capture_new_image



app = Flask(__name__)


@app.route("/capture-image")
# @cross_origin
def capture_image():
    try:
        capture_new_image()

        return jsonify({
            "success": True,
            "image-path": "test"
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": e
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
    print("Done.")


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080)
