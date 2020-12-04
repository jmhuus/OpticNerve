import subprocess
import os
import time
import RPi.GPIO as GPIO


class Minimodem:

    ACTION_GET_DEVICE_DETAILS = "get-device-details"
    ACTION_CAPTURE_IMAGE = "capture-image"
    ACTION_MULTIPLE_CAPTURES_BY_COUNT = "multiple-captures-by-count"
    ACTION_GET_CAMERA_STATE = "get-camera-state"
    ACTION_GET_EXPOSURE_TIME = "set-exposure-time"
    ACTION_SET_EXPOSURE_TIME = "get-exposure-time"
    ACTION_SET_APERTURE = "set-aperture"
    ACTION_SET_APERTURE_F_STOP = "set-aperture-f-stop"
    ACTION_GET_APERTURE_OPTIONS = "get-aperture-options"
    ACTION_GET_LENS_ID = "get-lens-id"
    ACTION_GET_ISO_NUMBER = "get-iso-number"
    ACTION_SET_ISO_NUMBER = "set-iso-number"

    
    def __init__(self):
        self.tx_data = None
        self.rx_data = None

        # Set up GPIO pins
        GPIO.setwarnings(False)
        GPIO.setmode(GPIO.BOARD)
        GPIO.setup(3, GPIO.OUT, initial=GPIO.LOW)

        
    def transmit(self, data):
        self.tx_data = data
        
        try:
            # Send
            self.send(self.tx_data + "~~~~\n\n\n")

            # Recieve
            self.rx_data = self.recieve("~")
            
        finally:
            if self.rx_data:
                return self.rx_data
            else:
                return None

            
    def recieve(self, terminate_statement=None):
        def execute(cmd):
            popen = subprocess.Popen(
                cmd,
                stdout=subprocess.PIPE,
                universal_newlines=True
            )
            for stdout_line in iter(popen.stdout.readline, ""):
                yield stdout_line
            popen.stdout.close()
            return_code = popen.wait()
            if return_code:
                raise subprocess.CalledProcessError(return_code, cmd)

        response = ""
        for path in execute(["minimodem", "--rx", "200", "-q", "--print-filter"]):
            response += path
            if terminate_statement is not None:
                if terminate_statement in path:
                    time.sleep(1)
                    return response

        return response


    def send(self, json_data):
        # Write JSON data to tmp_data.txt
        with open("tmp_data.txt", "w") as f:
            f.write(json_data)

        # Transmit
        path = os.path.dirname(os.path.realpath(__file__))
        tmp_sound_filename = path+"/tmp_send_audio_file.wav"
        subprocess.run(
            "cat tmp_data.txt|minimodem --tx 200 -f {}".format(tmp_sound_filename),
            shell=True
        )
        GPIO.output(3, GPIO.HIGH)
        subprocess.run("aplay {}".format(tmp_sound_filename), shell=True)
        GPIO.output(3, GPIO.LOW)
