import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class Device {
    public id: number;
    public serialNumber: number;
    public model: string;
    public iProduct: number;
    public iVendor: number;
    public liveViewImage: string;
    public imageLatestName: string;
    public fNumberOptions: number[];
    public exposureOptions: number[];
    public isoOptions: number[];
    public imageFormat: string;
    public lensName: string;
    public previousSevenImages: string[];
    public manufacturer: string;
    public deviceCommsPending: boolean;

    // User-specified settings
    public shooting_mode: string;
    public exposure: number;
    public iso: number;
    public deviceType: string;
    public captureCount: number;
    public exposureTime: number
    public fNumber: number;

    public static readonly LOCAL = "local";
    public static readonly REMOTE = "remote";

    public constructor(
        _model: string,
        _serialNumber: number,
        _deviceType: string,
        private _dashboardComponent: DashboardComponent,
        private http: HttpClient
    ) {
        this.model = _model;
        this.serialNumber = _serialNumber;
        this.captureCount = 1;
        this.deviceType = _deviceType;

        // Temp hard-coded
        this.imageLatestName = "milky_way_image_pending.jpg";
        this.exposureOptions = [
            2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 31, 40, 50, 62, 80, 100,
            125, 166, 200, 250, 333, 400, 500, 666, 769, 1000, 1250,
            1666, 2000, 2500, 3333, 4000, 5000, 6250, 7692, 10000,
            13000, 16000, 20000, 25000, 30000, 40000, 50000, 60000,
            80000, 100000, 130000, 150000, 200000, 250000, 300000
        ];
        this.exposureTime = this.exposureOptions[0];
        this.isoOptions = [100, 200, 400, 800, 1600, 3200];
        this.captureCount = 1;
        this.iso = this.isoOptions[0];
        this.previousSevenImages = [];
        this.deviceCommsPending = false;
    }

    public async initConnectionDetails(): Promise<boolean> {
        await this.getFNumberOptions();
        await this.setFNumber();
        await this.setIsoNumber();
        await this.setExposure();
        await this.getDeviceDetails()

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
      S -> exposure priority  P -> programmed
    */
    setShootingMode(mode: string): void {
        let modes: string[] = ['M', 'A', 'S', 'P'];
        if (modes.includes(mode)) {
            this.shooting_mode = mode;
        }
    }

    addImageToHistory(image_name: string): void {
        // Prevent duplicates - this may occur only during time lapse
        // mode when obeserving the camera state.
        if (!this.previousSevenImages.includes(image_name)) {
            this.previousSevenImages.push(image_name);
        }

        // Limit to seven images
        if (this.previousSevenImages.length === 8) {
            this.previousSevenImages.shift();
        }
    }

    // Initiates the device to capture an image and return the result
    async captureImage(): Promise<any> {
        if (this.captureCount > 1) {
            const body = {
                'device-type': this.deviceType,
                'capture-count': this.captureCount
            };
            const postOptions = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            let response = await this.http.post(
                "http://localhost:8080/multiple-captures-by-count",
                body,
                postOptions).toPromise();
            if (response['success']) {
                if ("camera-session-id" in response) {
                    this.observeCameraStateUntilCompletion(
                        response["camera-session-id"]);
                } else if ("image-name" in response) {
                    this.imageLatestName = response["image-name"];
                    this.addImageToHistory(response["image-name"]);
                }
            } else {
                this._dashboardComponent.showSnackBarMessage(
                    "There was an error: " + response["error"]);
            }
        } else {
            const body = {
                'device-type': this.deviceType,
            };
            const postOptions = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // TODO(jordanhuus): notify user of POST error response
            let response =
                await this.http.post(
                    "http://localhost:8080/capture-image",
                    body,
                    postOptions).toPromise();
            if (response['success']) {
                this.imageLatestName = response["image-name"];
                this.addImageToHistory(response["image-name"]);
            } else {
                this._dashboardComponent.showSnackBarMessage(
                    "There was an error: " + response["error"]);
            }
        }
    }

    // Used when taking a timelapse to confirm when the device is complete
    observeCameraStateUntilCompletion(cameraSessionId): void {
        let subscription = interval(1000).subscribe(x => {
            const body = {
                'device-type': this.deviceType,
                'camera-session-id': cameraSessionId
            };
            const postOptions = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            this.http.post("http://127.0.0.1:8080/get-camera-state", body, postOptions)
                .subscribe(response => {
                    // Images taken from time lapse
                    if (response["success"] && response["image-name"]) {
                        this.imageLatestName = response["image-name"];
                        this.addImageToHistory(response["image-name"]);
                    } else {
                        this._dashboardComponent.showSnackBarMessage(
                            "There was an error: " + response["error"]);
                    }

                    // Time lapse completion
                    if (response["camera-state"] == "complete") {
                        subscription.unsubscribe();
                    }
                });
        });
    }

    // Retrieves the device exposure time which sets the exposure time (milliseconds)
    // Only available for manual (M) and shutter priority (S) modes
    async setExposure(): Promise<any> {
        this.deviceCommsPending = true;
        const body = {
            'device-type': this.deviceType,
            'exposure-time': this.exposureTime
        };
        const postOptions = {
            headers: { 'Content-Type': 'application/json' }
        };
        let response = await this.http.post(
            "http://127.0.0.1:8080/set-exposure-time",
            body,
            postOptions).toPromise();
        if (response['success']) {
            this.exposureTime = this.exposureOptions[0];
        } else {
            this._dashboardComponent.showSnackBarMessage(
                "There was an error: " + response["error"]);
        }
        this.deviceCommsPending = false;
    }

    async setFNumber(): Promise<any> {
        this.deviceCommsPending = true;
        const body = {
            'device-type': this.deviceType,
            'f-number': this.fNumber
        };
        const postOptions = {
            headers: { 'Content-Type': 'application/json' }
        };
        let response = await this.http.post(
            'http://127.0.0.1:8080/set-aperture-f-stop',
            body,
            postOptions).toPromise();
        if (!response['success']) {
            this._dashboardComponent.showSnackBarMessage(
                "There was an error: " + response["error"]);
        }
        this.deviceCommsPending = false;
    }

    // Retrieve available f-stop numbers for the current camera lens
    async getFNumberOptions(): Promise<any> {
        this.deviceCommsPending = true;
        const body = { 'device-type': this.deviceType };
        const postOptions = {
            headers: { 'Content-Type': 'application/json' }
        };
        let response = await this.http.post(
            'http://127.0.0.1:8080/get-aperture-options',
            body,
            postOptions).toPromise();
        if (response['success']) {
            this.fNumberOptions = response["f-number-options"];
            this.fNumber = this.fNumberOptions[0];
        } else {
            this._dashboardComponent.showSnackBarMessage(
                "There was an error: " + response["error"]);
        }
        this.deviceCommsPending = false;
    }

    // Retrieve current device ISO number
    async getIsoNumber(): Promise<any> {
        this.deviceCommsPending = true;
        const body = { 'device-type': this.deviceType };
        const postOptions = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let response = await this.http.post(
            "http://localhost:8080/get-iso-number",
            body,
            postOptions).toPromise();
        if (response['success']) {
            this.iso = response['iso-number'];
        } else {
            this._dashboardComponent.showSnackBarMessage(
                "There was an error: " + response["error"]);
        }
        this.deviceCommsPending = false;
    }

    // Set device ISO number
    async setIsoNumber(): Promise<any> {
        this.deviceCommsPending = true;
        const body = {
            'device-type': this.deviceType,
            'iso-number': this.iso
        };
        const postOptions = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let response = await this.http.post(
            "http://localhost:8080/set-iso-number",
            body,
            postOptions).toPromise();
        if (response['success']) {
            this.iso = response['iso-number'];
        } else {
            this._dashboardComponent.showSnackBarMessage(
                "There was an error: " + response["error"]);
        }
        this.deviceCommsPending = false;
    }

    // Get device details (camera model, etc.)
    async getDeviceDetails(): Promise<any> {
        this.deviceCommsPending = true;
        const body = { 'device-type': this.deviceType };
        const postOptions = {
            headers: { 'Content-Type': 'application/json' }
        };
        let response = await this.http.post(
            "http://127.0.0.1:8080/get-device-details",
            body,
            postOptions).toPromise();
        if (response["success"]) {
            this.imageFormat = response["device-details"]["CaptureFormats"];
            this.manufacturer = response["device-details"]["Manufacturer"];
        } else {
            this._dashboardComponent.showSnackBarMessage(
                "There was an error: " + response["error"]);
        }
        this.deviceCommsPending = false;
    }

    // Ensure user-specified capture count is valid
    checkCaptureCount(): void {
        if (this.captureCount <= 0) {
            // TODO(jordanhuus): notify user that the value was invalid
            this.captureCount = 1;
        }
    }
}
