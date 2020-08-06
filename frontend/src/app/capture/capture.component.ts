import { Component, OnInit, ChangeDetectorRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Device } from './device';
declare var window: Window;
declare global {
    interface Window {
	process: any;
	require: any;
    }
}


@Component({
    selector: 'app-capture',
    templateUrl: './capture.component.html',
    styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {

    device: Device;
    ipc: any;

    constructor(private cdRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {
	this.device = new Device('NIKON', 'D3100', 1234, 4321, 'A', 1.8, 100, 400);
	this.device.shutter_options = [
	    2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 31, 40, 50, 62, 80, 100,
	    125, 166, 200, 250, 333, 400, 500, 666, 769, 1000, 1250,
	    1666, 2000, 2500, 3333, 4000, 5000, 6250, 7692, 10000,
	    13000, 16000, 20000, 25000, 30000, 40000, 50000, 60000,
	    80000, 100000, 130000, 150000, 200000, 250000, 300000
	];
	
	// Retrieve ipcRenderer for electron
	this.ipc = window["ipc"];
	
	// Asynchronous response
	this.ipc.on('rendererListener', (event, arg) => {
	    // Incoming error message?
	    if ("error" in arg) {
		console.log("handling error");
		console.log(arg);
	    } else {
		// Handle normal request
		switch(arg["context"]["command"]) {
		    case "captureImage_server":
			this.device.image_latest_path = arg["image-path"];
			this.cdRef.detectChanges();
			break;
		    
		}	
	    }
	});
	this.setShutter(this.device.shutter_options[0]);
	this.getFNumberOptions();
    }
    
    // Set CSS class for the chosen device shooting mode (M, A, S, P)
    getModeClass(mode: string): Object {
	if (mode == this.device.shooting_mode) {
	    return "shooting_mode_highlighted";
	} else {
	    return "shooting_mode_normal";
	}
    }

    // Capture a new image
    captureImage(): void {
	// Asynchronous send
	this.ipc.send("main", {
	    "command": "captureImage_server"
	});
    }

    // Set the exposure time for
    // Only available for manual (M) and shutter priority (S) modes
    setShutter(exposure_time: number): void {
	var response = this.ipc.sendSync("main", {
	    "command": "setExposure_server",
	    "exposure-time": exposure_time
	});
	this.device.shutter = response["exposure-time"];
    }

    setFNumber(f_number: string): void {
	this.ipc.send("main", {
	    "command": "setFNumber_server",
	    "f-number": f_number
	});
    }

    // Retrieve available f-stop numbers for the current camera lens
    getFNumberOptions(): void {
	var response = this.ipc.sendSync("main", {
	    "command": "getFNumberOptions_server"
	});
	this.device.aperture_options = response["f-number-options"];
    }
}
