import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Device } from '../../device';

@Component({
    selector: 'app-device-item',
    templateUrl: './device-item.component.html',
    styleUrls: ['./device-item.component.css']
})
export class DeviceItemComponent implements OnInit {
    @Input('device') public device;
    @Output() chooseDevice = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    // User connecting to a specific device
    connectToDevice(device: Device): void {
        this.chooseDevice.emit(device);
    }
}
