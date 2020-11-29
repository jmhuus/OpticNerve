import subprocess
import os


def receieve():
    def execute(cmd):
        popen = subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            universal_newlines=True
        )
        for stdout_line in  iter(popen.stdout.readline, ""):
            yield stdout_line 
            popen.stdout.close()
            return_code = popen.wait()
        if return_code:
            raise subprocess.CalledProcessError(return_code, cmd)

    # Example
    for path in execute(["minimodem", "--rx", "100", "-q", "--print-filter"]):
        print(path, end="")


def send(json_data):
    # Write JSON data to tmp_data.txt
    with open("tmp_data.txt", "w") as f:
        f.write(json_data)

    exit(0)
    
    # Transmit
    path = os.path.dirname(os.path.realpath(__file__))
    tmp_sound_filename = path+"/tmp_send_audio_file.wav"
    subprocess.run(
        "cat tmp_data.txt|minimodem --tx 100 -f {}".format(tmp_sound_filename),
        shell=True
    )
    subprocess.run("aplay {}".format(tmp_sound_filename), shell=True)
