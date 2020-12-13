import { Component, OnInit, ChangeDetectorRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Device } from './device';
import { interval } from 'rxjs';
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
    action_pending: boolean;
    action_pending_message: string;
    captureCount: number;

    constructor(private cdRef: ChangeDetectorRef) {
        this.action_pending = false;
        this.action_pending_message = "";
    }

    ngOnInit(): void {
        this.device = new Device('NIKON', 'D3100', 1234, 4321, 'A', 1.8, 100, 400, 'local');
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
                console.log(arg);
                switch (arg["command"]) {
                    case "captureImage_server":
                        if ("camera-session-id" in arg) {
                            // Begin observing camera state for capture completion
                            this.observeCameraStateUntilCompletion(arg["camera-session-id"]);
                        } else {
                            this.setActionPending(false, "");
                            this.device.image_latest_path = arg["image-path"];
                            this.cdRef.detectChanges();
                        }
                        break;
                }
            }
        });

        // Init default values
        this.captureCount = 1;
        this.setShutter(this.device.shutter_options[0]);
        this.getFNumberOptions();
        this.setFNumber(this.device.aperture_options[0]);
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
        this.setActionPending(true, "Camera Busy: capturing image...");

        // TODO(jordanhuus): this will need to analyze 'this.captureCount'
        // Likely just provide this on each and every call???? Not sure
        this.ipc.send("main", {
            "command": "captureImage_server",
            "capture-count": this.captureCount,
            "device-type": this.device.device_type
        });
    }

    // Used when taking a timelapse to confirm when the device is complete
    observeCameraStateUntilCompletion(cameraSessionId): boolean {
        let subscription = interval(1000).subscribe(x => {
            var response = this.ipc.sendSync("main", {
                "command": "getCameraState_server",
                "camera-session-id": cameraSessionId,
                "device-type": this.device.device_type
            });
            if (response["camera-state"] == "complete") {
                subscription.unsubscribe();
                this.setActionPending(false, "");
                this.device.image_latest_path = response["image-path"];
                this.cdRef.detectChanges();
            } else {
                this.device.image_latest_path = response["image-path"];
                this.cdRef.detectChanges();
            }
        });

        return true;
    }

    // Set the exposure time for
    // Only available for manual (M) and shutter priority (S) modes
    setShutter(exposure_time: number): void {
        var response = this.ipc.sendSync("main", {
            "command": "setExposure_server",
            "exposure-time": exposure_time,
            "device-type": this.device.device_type
        });
        this.device.shutter = response["exposure-time"];
    }

    setFNumber(f_number: number): void {
        this.setActionPending(true, "Camera Busy: setting f-stop setting...");
        this.ipc.sendSync("main", {
            "command": "setFNumber_server",
            "f-number": f_number,
            "device-type": this.device.device_type
        });
        this.setActionPending(false, "");
    }

    // Retrieve available f-stop numbers for the current camera lens
    getFNumberOptions(): void {
        this.setActionPending(true, "Camera Busy: retrieving available f-stop values...");
        var response = this.ipc.sendSync("main", {
            "command": "getFNumberOptions_server",
            "device-type": this.device.device_type
        });
        this.device.aperture_options = response["f-number-options"];
        this.setActionPending(false, "");
    }

    setActionPending(visible: boolean, message: string): void {
        this.action_pending = visible;
        this.action_pending_message = message;
    }

    checkCaptureCount(captureCount: number): void {
        if (captureCount <= 0) {
            // TODO(jordanhuus): notify user that the value was invalid
            this.captureCount = 1;
        }
    } o
}
