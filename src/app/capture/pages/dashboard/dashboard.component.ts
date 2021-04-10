import { Component, OnInit } from '@angular/core';
import { Device } from '../../device';
import { ElectronService } from 'ngx-electron';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

// TODO(jordanhuus): Consider removing eletronservice if not used after migrating
// to HttCliennt.

enum ConnectionTypeIndexes {
    USB = 0,
    REMOTE_PACKET_RADIO = 1
}


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    devices: Array<Device>;
    chosenDevice: Device;
    actionPending: boolean;
    actionPendingMessage: string;
    public electronService: ElectronService;
    deviceTableColumns: string[] = ["device", "serialNumber"];
    refreshIconPath: string = "assets/images/refresh_white_18dp.png";

    constructor(
        _electronService: ElectronService,
        private http: HttpClient,
        private _snackBar: MatSnackBar
    ) {
        this.actionPending = false;
        this.actionPendingMessage = "";
        this.electronService = _electronService;
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
        this.http.get("http://localhost:8080/get-ptp-device-ids")
            .subscribe(response => {
                if (response["success"]) {
                    for (const [key, value] of Object.entries(response["device-ids"])) {
                        devices.push(new Device(key, parseInt(String(value)), this, this.http));
                    }
                    this.devices = devices;
                }
            });
    }

    // User connecting to a specific device
    chooseDevice(device: Device, selectedTabIndex: any): void {

        // USB
        if (selectedTabIndex == ConnectionTypeIndexes.USB) {
            if (device == null) {
                this.showSnackBarMessage("Please select a device to connect to.");
                return;
            }

            this.chosenDevice = device;
            this.chosenDevice.initConnectionDetails()
                .then(() => {
                })
                .catch((error) => {
                    this.showSnackBarMessage("There was an error: " + error);
                });

            // Remote Packet Radio
        } else if (selectedTabIndex == ConnectionTypeIndexes.REMOTE_PACKET_RADIO) {
            // TODO(jordanhuus): implement packet radio connection
            console.log("Packet radio selected");
        }
    }

    chooseRemoteDevice(): void {
        // TODO(jordanhuus): implement connection to remote packet radio device.
        console.log("Choosing remote device...");
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    openImagesFileBrowser(): void {
        this.http.get('')
            .subscribe(() => {
                console.log("Done attempting to open file browser at location of captured images.");
            });
    }

    showSnackBarMessage(message: string): void {
        this._snackBar.open(message, "", { duration: 5000 });
    }
}
