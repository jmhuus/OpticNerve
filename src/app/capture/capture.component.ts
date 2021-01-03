import { Component, OnInit, ChangeDetectorRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Device } from './device';
import { interval } from 'rxjs';
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

    constructor(
        private cdRef: ChangeDetectorRef,
        private _electronService: ElectronService,
        private spinner: NgxSpinnerService
    ) {
        this.actionPending = false;
        this.actionPendingMessage = "";
        this.electronService = _electronService;
    }

    ngOnInit(): void {
        // Asynchronous response
        this.electronService.ipcRenderer.on('rendererListener', (event, arg) => {
            // Incoming error message?
            if ("error" in arg) {
                console.log("handling error");
                console.log(arg);
            } else {
                // Handle normal request
                switch (arg["command"]) {
                    case "captureImage_server":
                        if ("camera-session-id" in arg) {
                            // Begin observing camera state for capture completion
                            this.observeCameraStateUntilCompletion(arg["camera-session-id"]);
                        } else {
                            this.setActionPending(false, "");
                            this.devices[0].imageLatestPath = arg["image-path"];
                            this.cdRef.detectChanges();
                        }
                        break;
                }
            }
        });

        // Init default values
        this.devices = this.getConnectedDevices();
        this.chosenDevice = this.devices[0];
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

    // Used when taking a timelapse to confirm when the device is comple, this.electronServicete
    observeCameraStateUntilCompletion(cameraSessionId): boolean {
        let subscription = interval(1000).subscribe(x => {
            var response = this.electronService.ipcRenderer.sendSync("main", {
                "command": "getCameraState_server",
                "camera-session-id": cameraSessionId,
                "device-type": this.devices[0].deviceType
            });
            if (response["camera-state"] == "complete") {
                subscription.unsubscribe();
                this.setActionPending(false, "");
                this.devices[0].imageLatestPath = response["image-path"];
                this.cdRef.detectChanges();
            } else {
                this.devices[0].imageLatestPath = response["image - path"];
                this.cdRef.detectChanges();
            }
        });

        return true;
    }

    // Retrieve connected devices connected via USB
    getConnectedDevices(): Array<Device> {
        let devices: Array<Device> = [];
        let response = this.electronService.ipcRenderer.sendSync("main", {
            "command": "getConnectedDevices_server"
        });
        if (response["success"]) {
            for (const [key, value] of Object.entries(response["device-ids"])) {
                devices.push(new Device(key, parseInt(String(value)), this.electronService, this));
            }
            console.log(devices.length);
            console.log(devices[0]);
            return devices;
        } else {
            console.log("There was an error calling getConnectedDevices()");
            console.log(response["error"]);
            return devices;
        }
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Notify user that an action is pending
    setActionPending(visible: boolean, message: string): void {
        // setTimeout(() => {
        //     /** spinner ends after 5 seconds */
        //     this.spinner.hide();
        // }, 5000);

        // this.actionPending = visible;
        // this.actionPendingMessage = message;
    }

    // User connecting to a specific device
    chooseDevice(device: Device): void {
        this.chosenDevice = device;
        this.spinner.show();
        setTimeout(() => {
            this.chosenDevice.initConnectionDetails()
                .then((value) => {
                    this.setActionPending(false, "");
                })
                .catch((error) => {
                    console.log("There was an error connecting to the device...");
                })
            this.spinner.hide();
        }, 3000);

    }
}
