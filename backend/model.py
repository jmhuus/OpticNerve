import os
import sys
from sqlalchemy import Column, String, Integer
from flask_sqlalchemy import SQLAlchemy
import json
import utils

application_path = utils.get_base_application_path()
utils.ensure_path_available(application_path+"backend/")
# os.chmod(application_path+"backend/optic-nerve.db", 0o777)
database_path = f"sqlite:///{application_path}backend/optic-nerve.db"
db = SQLAlchemy()


def setup_db(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    return db


class Camera(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    camera_state = db.Column(db.Integer, nullable=True)
    image_file_name = db.Column(db.String, nullable=True)
    STATE_PENDING_CAPTURE = 1
    STATE_COMPLETE = 2

    def __repr__(self):
        return f"<Camera {self.id} {self.camera_state}>"

