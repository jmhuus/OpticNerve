### Optic Nerve
This is a simple desktop GUI to control a tethered camera device. This application is great for star gazing in the comfort of your car, tent, or otherwise.

I decided to build this app even though there are some great existing applications (DarkTable) as a learning journey. Also, I'd like a more user-friendly UX to engage with when working at night - dark screen, preview of the last image taken, and easy to set capture settings.

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
* Full-featured camera tether control of DSLR and other point-and-shoot hardware
* Long-term
    * Focus control.
        * Unfortunately, fine-tune lens focus control is quite difficult because manufacturers don't support any features/API for this. Fortunately, some smart folks at MIT have outlined a hackable option [here](http://web.media.mit.edu/~bandy/invariant/move_lens.pdf).
	* Focus control is essential for *complete* remote manipulation of a camera
    * Pan/tilt
        * This UI will ideally support pan/tilt functionality for the DSLR which will require a user to hook up an arduino or Raspberry Pi.
