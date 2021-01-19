import { Component, OnInit, ChangeDetectorRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Device } from './device';
import { ElectronService } from 'ngx-electron';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
    selector: 'app-capture',
    templateUrl: './capture.component.html',
    styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {

    devices: Array<Device>;
    chosenDevice: Device;
    actionPending: boolean;
    actionPendingMessage: string;
    public electronService: ElectronService;
    deviceTableColumns: string[] = ["device", "serialNumber"];
    public cdRef: ChangeDetectorRef;
    refreshIconPath: string = "assets/images/refresh_white_18dp.png";

    constructor(
        private _cdRef: ChangeDetectorRef,
        _electronService: ElectronService,
        public spinner: NgxSpinnerService
    ) {
        this.actionPending = false;
        this.actionPendingMessage = "";
        this.electronService = _electronService;
        this.cdRef = _cdRef;
    }

    ngOnInit(): void {
        // Init default values
        this.getConnectedDevices();
    }

    // Set CSS class for the chosen device shooting mode (M, A, S, P)
    getModeClass(mode: string): Object {
        if (!this.chosenDevice) {
            return;
        }

        if (mode == this.devices[0].shooting_mode) {
            return "shooting_mode_highlighted";
        } else {
            return "shooting_mode_normal";
        }
    }

    // Retrieve connected devices connected via USB
    getConnectedDevices(): void {
        let devices: Array<Device> = [];
        this.electronService.ipcRenderer.invoke("main", {
            "command": "getConnectedDevices_server"
        })
            .then((response) => {
                for (const [key, value] of Object.entries(response["device-ids"])) {
                    devices.push(new Device(key, parseInt(String(value)), this.electronService, this));
                }
                this.devices = devices;
            })
            .catch(error => {
                console.log("There was an error calling getConnectedDevices()");
                console.log(error);
            })
    }


    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    // User connecting to a specific device
    chooseDevice(device: Device): void {
        this.chosenDevice = device;
        this.spinner.show();
        this.chosenDevice.initConnectionDetails()
            .then((value) => {
                this.spinner.hide();
            })
            .catch((error) => {
                console.log("There was an error connecting to the device...");
                console.log(error);
            });
    }

    openImagesFileBrowser(): void {
        this.electronService.ipcRenderer.invoke("main", {
            "command": "openImagesFileBrowser_server"
        })
            .then(response => {
                console.log("Done attempting to open file browser at location of captured images.");
            })
            .catch(error => {
                console.log("There was an error connecting to the device...");
                console.log(error);
            });
    }
}
