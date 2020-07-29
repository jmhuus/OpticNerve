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
	// Retrieve ipcRenderer for electron
	this.ipc = window["ipc"];
	
	// Asynchronous response
	this.ipc.on('rendererListener', (event, arg) => {
	    switch(arg["context"]["command"]) {
		case "captureImage_server":
		    this.device.image_latest_path = arg["image-path"];
		    this.cdRef.detectChanges();
		    break;
		    
		case "setExposure_server":
		    break;
	    }
	});
    }

    ngOnInit(): void {
	this.device = new Device('NIKON', 'D3100', 1234, 4321, 'A', 1.8, 123, 400);
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
	console.log('this.constructor.name');
	console.log(this.constructor.name);
	
	// Asynchronous send
	this.ipc.send("main", {
	    "command": "captureImage_server"
	});
    }

    setShutter(): void {
	// Asynchronous send
	this.ipc.send("main", {
	    "command": "setExposure_server",
	    "exposure-time": (this.device.shutter * 10)
	});
    }
}
