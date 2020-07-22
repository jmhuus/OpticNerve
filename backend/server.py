from flask import Flask, request, abort, jsonify
from flask_cors import cross_origin
from CaptureImage import capture_new_image



app = Flask(__name__)


@app.route("/capture-image")
@cross_origin
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




if __name__ == "__main__":
    app.run()
