### Optic Nerve
This is a simple desktop GUI to control a tethered camera device. This application is great for star gazing in the comfort of your car, tent, or otherwise.

I decided to build this app even though there are some great existing applications (DarkTable, Capture One, Adobe Lightroom, etc) as a learning journey. Also, I'd like a more user-friendly UX to engage with when working at night - dark screen, preview of the last image taken, and easy to set capture settings.

![Optic Nerve DSLR Tether](/example_screenshot.png)

#### Tech Stack
* jmhuus/pyptp to support sending PTP commands to DSLR using Python 3
* ElectronJS
* Angular

#### What is the status of this project?
Last Update: 8/3/2020
* InitiateCapture command is working
* Retrieve and display image result working
* Set shutter exposure time working
* Set aperture f-stop 


#### Where is this project going?
* Full-featured camera tether control of DSLR using mobile or desktop UI
* Pan/tilt
    * This UI will ideally support pan/tilt functionality for the DSLR which will require a user to hook up an arduino or Raspberry Pi.


### Setup Steps
* Set up virtualenv
* Download dependencies using pip install -r requirements.txt
* (Optional) Using a Raspberry Pi to control DSLR wirelessly
    * Must allow non-root user to access the DSLR USB device with the following steps
    ```bash
    target='SUBSYSTEM=="usb", ATTR{idVendor}=="04b0", ATTR{idProduct}=="0427", MODE="666"'
    echo "$target" | sudo tee --append /etc/udev/rules.d/99-usb_DSLR_ptp.rules
    ```
    