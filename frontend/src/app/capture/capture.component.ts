import { Component, OnInit } from '@angular/core';
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

    constructor() { }

    ngOnInit(): void {
	this.device = new Device('NIKON', 'D3100', 1234, 4321, 'A', 1.8, 123, 400);
    }

    getModeClass(mode: string): Object {
	if (mode == this.device.shooting_mode) {
	    return "shooting_mode_highlighted";
	} else {
	    return "shooting_mode_normal";
	}
    }

    captureImage(): void {
	console.log(window);	
	var sendTest = window['sendTestMessage'];
	sendTest();
    }
}
