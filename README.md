## Optic Nerve
Optic Nerve is a desktop app that can control DSLR cameras via USB to initiate new pictures, download images, and change various camera capture settings such as ISO, F-Stop, and Exposure (Shutter). 

### USB
These commands are communicated directly to the DSLR via USB using the PTP protocol. Connecting a DSLR direclty to your MacOS or Linux machine allows you to issue these commands.

### Available Operating Systems
* Linux
* Debian DPKG (x86_64)
* Red Hat RPM (x86_64)
* Debian DPKG (ARM) for Raspberry Pi
* Debian RPM (ARM) for Raspberry Pi
* 
Support for MacOS and Windows will be available shortly.


![Optic Nerve DSLR Tether](/example_screenshot.png)

## Tech Stack
* ElectronJS
* Angular
* SQLite
* Node
* Flask


## Setup Steps (for development)
* Set up virtualenv
    - `cd backend`
    - `virtualenv -p python3 env_optic_nerve`
* Download dependencies for virtual environment
    - `pip install -r requirements.txt`
* Run pyinstaller
    - `pyinstaller server.py --paths=./env_optic_nerve/lib/python3.7/site-packages/ --add-data images/:images/`
* Install node packages
    - `cd ..`
    - `npm install`
* Build angular project
    - `ng build`
* (Optional) Using a Raspberry Pi to control DSLR wirelessly
    * Must allow non-root user to access the DSLR USB device with the following steps
    ```bash
    target='SUBSYSTEM=="usb", ATTR{idVendor}=="04b0", ATTR{idProduct}=="0427", MODE="666"'
    echo "$target" | sudo tee --append /etc/udev/rules.d/99-usb_DSLR_ptp.rules
    ```
    
