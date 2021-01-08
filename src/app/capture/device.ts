import { CaptureComponent } from './capture.component';
import { ElectronService } from 'ngx-electron';
import { interval } from 'rxjs';

const DeviceType = {
    LOCAL: 'local',
    RADIO: 'radio'
};

export class Device {
    public id: number;
    public serialNumber: number;
    public model: string;
    public iProduct: number;
    public iVendor: number;
    public liveViewImage: string;
    public imageLatestPath: string;
    public fNumberOptions: number[];
    public shutterOptions: number[];
    public isoOptions: number[];
    public imageFormat: string;
    public lensName: string;

    // User-specified settings
    public shooting_mode: string;
    public shutter: number;
    public iso: number;
    public deviceType: string;
    private electronService: ElectronService;
    private captureComponent: CaptureComponent;
    public captureCount: number;
    public exposureTime: number
    public fNumber: number;

    public constructor(
        _model: string,
        _serialNumber: number,
        private _electronService: ElectronService,
        private _captureComponent: CaptureComponent
    ) {
        this.model = _model;
        this.serialNumber = _serialNumber;
        this.electronService = _electronService;
        this.captureComponent = _captureComponent;
        this.captureCount = 1;

        // Temp hard-coded
        this.imageLatestPath = "assets/images/milky_way_image_pending.jpg";
        this.shutterOptions = [
            2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 31, 40, 50, 62, 80, 100,
            125, 166, 200, 250, 333, 400, 500, 666, 769, 1000, 1250,
            1666, 2000, 2500, 3333, 4000, 5000, 6250, 7692, 10000,
            13000, 16000, 20000, 25000, 30000, 40000, 50000, 60000,
            80000, 100000, 130000, 150000, 200000, 250000, 300000
        ];
        this.isoOptions = [100, 200, 400, 800, 1600, 3200];
        this.captureCount = 1;
    }

    public async initConnectionDetails(): Promise<boolean> {
        var response: any;
        this.deviceType = DeviceType.LOCAL;
        response = await this.getFNumberOptions();
        this.fNumberOptions = response["f-number-options"];
        this.fNumber = this.fNumberOptions[0];
        await this.setFNumber();
        this.iso = this.isoOptions[0];
        await this.setIsoNumber();
        await this.setShutter();
        this.exposureTime = this.shutterOptions[0];
        response = await this.getDeviceDetails();

        this.imageFormat = response["device-details"]["CaptureFormats"];
        this.model = response["device-details"]["Manufacturer"] + " " + response["device-details"]["Model"];

        /*
        CaptureFormats: "(14337, 12288)"
        DeviceVersion: "V1.01"
        Manufacturer: "Nikon Corporation"
        Model: "D3100"
        OperationsSupported: (19) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        SerialNumber: "3378947"
        VendorExtensionID: "6"
        */

        return true;
    }

    /*
      Set the perferred shooting mode
      M -> manual mode       A -> aperture priority
      S -> shutter priority  P -> programmed
    */
    setShootingMode(mode: string): void {
        let modes: string[] = ['M', 'A', 'S', 'P'];
        if (modes.includes(mode)) {
            this.shooting_mode = mode;
        }
    }

    // Capture a new image
    async captureImage(): Promise<any> {
        // TODO(jordanhuus): this will need to analyze 'this.captureCount'
        // Likely just provide this on each and every call???? Not sure
        this.electronService.ipcRenderer.invoke("main", {
            "command": "captureImage_server",
            "capture-count": this.captureCount,
            "device-type": this.deviceType
        })
            .then(response => {
                if (response["success"]) {
                    if ("camera-session-id" in response) {
                        // Begin observing camera state for capture completion
                        this.observeCameraStateUntilCompletion(response["camera-session-id"]);
                    } else {
                        this.imageLatestPath = response["image-path"];
                    }
                }
            })
            .catch(error => {
                console.log("There was an error calling device.captureImage(): " + error);
            })
    }

    // Used when taking a timelapse to confirm when the device is comple, this.electronServicete
    observeCameraStateUntilCompletion(cameraSessionId): void {
        let subscription = interval(1000).subscribe(x => {
            this.electronService.ipcRenderer.invoke("main", {
                "command": "getCameraState_server",
                "camera-session-id": cameraSessionId,
                "device-type": this.deviceType
            })
                .then(response => {
                    if (response["success"]) {
                        if (response["camera-state"] == "complete") {
                            this.imageLatestPath = response["image-path"];
                            subscription.unsubscribe();
                        } else {
                            this.imageLatestPath = response["image-path"];
                        }
                    } else {
                        // TODO(jordanhuus): alert user that there was an error...
                    }
                })
                .catch(error => {
                    console.log("There was an error calling device.observeCameraStateUntilCompletion(): " + error);
                    subscription.unsubscribe();
                })

        });
    }

    // Set the exposure time for
    // Only available for manual (M) and shutter priority (S) modes
    async setShutter(): Promise<void> {
        this.captureComponent.spinner.show();
        var response = await this.electronService.ipcRenderer.invoke("main", {
            "command": "setExposure_server",
            "exposure-time": this.exposureTime,
            "device-type": this.deviceType
        });
        this.captureComponent.spinner.hide();
        if (response["success"]) {
            // TODO(jordanhuus): something here...
        } else {
            // TODO(jordanhuus): alert user that there was an error...
        }
    }

    async setFNumber(): Promise<void> {
        this.captureComponent.spinner.show();
        var response = await this.electronService.ipcRenderer.invoke("main", {
            "command": "setFNumber_server",
            "f-number": this.fNumber,
            "device-type": this.deviceType
        });
        this.captureComponent.spinner.hide();
        if (response["success"]) {
            // TODO(jordanhuus): something here...
        } else {
            // TODO(jordanhuus): alert user that there was an error...
        }
    }

    // Retrieve available f-stop numbers for the current camera lens
    async getFNumberOptions(): Promise<any> {
        this.captureComponent.spinner.show();
        var response = await this.electronService.ipcRenderer.invoke("main", {
            "command": "getFNumberOptions_server",
            "device-type": this.deviceType
        });
        this.captureComponent.spinner.hide();
        if (response["success"]) {
            // TODO(jordanhuus): something here...
        } else {
            // TODO(jordanhuus): alert user that there was an error...
        }
        return response;
    }

    // Retrieve current device ISO number
    async getIsoNumber(): Promise<any> {
        this.captureComponent.spinner.show();
        let response = await this.electronService.ipcRenderer.invoke("main", {
            "command": "getIso_server",
            "device-type": this.deviceType
        });
        this.captureComponent.spinner.hide();
        if (response["success"]) {
            // TODO(jordanhuus): something here...
        } else {
            // TODO(jordanhuus): alert user that there was an error...
        }

        return response;
    }

    // Set device ISO number
    async setIsoNumber(): Promise<void> {
        this.captureComponent.spinner.show();
        var response = await this.electronService.ipcRenderer.invoke("main", {
            "command": "setIso_server",
            "device-type": this.deviceType,
            "iso-number": this.iso,
        });
        this.captureComponent.spinner.hide();
        if (response["success"]) {
            // TODO(jordanhuus): something here...
        } else {
            // TODO(jordanhuus): alert user that there was an error...
        }
        this.iso = response["iso-number"];

    }

    // Get device details (camera model, etc.)
    async getDeviceDetails(): Promise<void> {
        this.captureComponent.spinner.show();
        var response = await this.electronService.ipcRenderer.invoke("main", {
            "command": "getDeviceDetails_server",
            "device-type": this.deviceType
        });
        this.captureComponent.spinner.hide();
        if (!response["success"]) {
            // TODO(jordanhuus): something here...
        }
        return response;
    }

    // Ensure user-specified capture count is valid
    checkCaptureCount(): void {
        if (this.captureCount <= 0) {
            // TODO(jordanhuus): notify user that the value was invalid
            this.captureCount = 1;
        }
    }
}
