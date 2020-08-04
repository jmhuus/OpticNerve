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
	this.device = new Device('NIKON', 'D3100', 1234, 4321, 'A', 1.8, 123, 400);
	
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
		    
		    case "setExposure_server":
		    
			break;

		    case "getFNumberOptions_server":
			this.device.aperture_options = arg["f-number-options"];
			this.cdRef.detectChanges();
			break;
		}	
	    }
	});
	
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
    setShutter(): void {
	// Asynchronous send
	this.ipc.send("main", {
	    "command": "setExposure_server",
	    "exposure-time": (this.device.shutter * 10)
	});
    }

    setFNumber(f_number: string): void {
	this.ipc.send("main", {
	    "command": "setFNumber_server",
	    "f-number": parseInt(f_number)
	});
    }

    // Retrieve available f-stop numbers for the current camera lens
    getFNumberOptions(): void {
	this.ipc.send("main", {
	    "command": "getFNumberOptions_server"
	});
    }
}
