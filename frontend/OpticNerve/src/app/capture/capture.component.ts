import { Component, OnInit } from '@angular/core';
import { Device } from './device';

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
    console.log("incoming mode: " + mode);
    console.log("device mode: " + this.device.shooting_mode);

    if (mode == this.device.shooting_mode) {
      console.log("test 1");
      return "shooting_mode_highlighted";
    } else {
      console.log("test 2");
      return "shooting_mode_normal";
    }
  }

  captureImage(): void {
    // Not implemented
  }
}
