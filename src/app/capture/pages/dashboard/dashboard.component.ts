import { Component, OnInit } from '@angular/core';
import { Device } from '../../device';
import { ElectronService } from 'ngx-electron';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemePalette } from '@angular/material/core';

enum ConnectionTypeIndexes {
    USB = 0,
    REMOTE_PACKET_RADIO = 1
}

export interface DeviceTypeRequirements {
    text: string;
    completed: boolean;
    color: ThemePalette;
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
    allComplete_usb: boolean = false;
    allComplete_packetRadio: boolean = false;

    packetRadioRequirements: Array<DeviceTypeRequirements> = [
        {
            text: 'This device is a Raspberry Pi.',
            completed: false,
            color: 'primary'
        },
        {
            text: 'This device is connected to a radio transceiver.',
            completed: false,
            color: 'primary'
        },
        {
            text: 'A second Raspberry Pi is running Optic Nerve Telemetry Software.',
            completed: false,
            color: 'primary'
        },
        {
            text: 'The second Pi is connected to a radio transceiver.',
            completed: false,
            color: 'primary'
        },
        {
            text: 'The second Raspberry Pi is connected to a DSLR.',
            completed: false,
            color: 'primary'
        },
        {
            text: 'The DSLR is set to Manual Mode.',
            completed: false,
            color: 'primary'
        },
        {
            text: 'Both radios are set to the same frequency.',
            completed: false,
            color: 'primary'
        }
    ];

    usbRequirements: Array<DeviceTypeRequirements> = [
        {
            text: 'This device is connected to a DSLR via USB.',
            completed: false,
            color: 'primary'
        },
        {
            text: 'The DSLR is set to Manual Mode.',
            completed: false,
            color: 'primary'
        },
    ];

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

    // USB Devices
    getConnectedDevices(): void {
        let devices: Array<Device> = [];
        this.http.get("http://localhost:8080/get-ptp-device-ids")
            .subscribe(response => {
                if (response["success"]) {
                    for (const [key, value] of Object.entries(response["device-ids"])) {
                        devices.push(new Device(key, parseInt(String(value)), Device.LOCAL, this, this.http));
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
        }
    }

    chooseRemoteDevice(): void {
        // TODO(jordanhuus): implement packet radio connection
        this.showSnackBarMessage("Connecting to packet radio device.");
        this.chosenDevice =
            new Device("Remote Device", 1234, Device.REMOTE, this, this.http);
        this.chosenDevice.initConnectionDetails()
            .then(() => {
            })
            .catch((error) => {
                this.showSnackBarMessage("There was an error: " + error);
            });
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

    updateAllComplete(deviceType: string) {
        if (deviceType == 'usb') {
            this.allComplete_usb =
                this.usbRequirements.every(t => t.completed);
        } else if (deviceType == 'packet_radio') {
            this.allComplete_packetRadio =
                this.packetRadioRequirements.every(t => t.completed);
        }
    }
}
