import { CaptureComponent } from './capture.component';
import { ElectronService } from 'ngx-electron';

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
        console.log("calling public initConnectionDetails()");
        this.deviceType = DeviceType.LOCAL;
        this.getFNumberOptions();
        this.fNumber = this.fNumberOptions[0];
        this.setFNumber();
        this.iso = this.isoOptions[0];
        this.setIsoNumber();
        this.exposureTime = this.shutterOptions[0];
        this.setShutter();

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
    captureImage(): void {
        // this.setActionPending(true, "Camera Busy: capturing image...");

        // TODO(jordanhuus): this will need to analyze 'this.captureCount'
        // Likely just provide this on each and every call???? Not sure
        this.electronService.ipcRenderer.send("main", {
            "command": "captureImage_server",
            "capture-count": this.captureCount,
            "device-type": this.deviceType
        });
    }

    // Set the exposure time for
    // Only available for manual (M) and shutter priority (S) modes
    setShutter(): void {
        // this.setActionPending(true, "Camera Busy: setting shutter exposure setting...");
        var response = this.electronService.ipcRenderer.sendSync("main", {
            "command": "setExposure_server",
            "exposure-time": this.exposureTime,
            "device-type": this.deviceType
        });
        if (response["success"]) {
            this.shutter = response["exposure-time"];
        } else {
            console.log("There was an error calling setShutter: " + response["error"]);
        }
        // this.setActionPending(false, "");
    }

    setFNumber(): void {
        // this.setActionPending(true, "Camera Busy: setting f-stop setting...");
        var response = this.electronService.ipcRenderer.sendSync("main", {
            "command": "setFNumber_server",
            "f-number": this.fNumber,
            "device-type": this.deviceType
        });
        if (response["success"]) {

        } else {
            console.log("There was an error calling setFNumber: " + response["error"]);
        }
        // this.setActionPending(false, "");
    }

    // Retrieve available f-stop numbers for the current camera lens
    getFNumberOptions(): void {
        // this.setActionPending(true, "Camera Busy: retrieving available f-stop values...");
        var response = this.electronService.ipcRenderer.send("main", {
            "command": "getFNumberOptions_server",
            "device-type": this.deviceType
        });
        if (response["success"]) {
            this.fNumberOptions = response["f-number-options"];
        } else {
            console.log("There was an error calling getFNubmerOptions: " + response["error"]);
        }
        // this.setActionPending(false, "");
    }

    // Retrieve current device ISO number
    getIsoNumber(): void {
        // this.setActionPending(true, "Camera Busy: retrieving device ISO number...");
        var response = this.electronService.ipcRenderer.sendSync("main", {
            "command": "getIso_server",
            "device-type": this.deviceType
        });
        if (response["success"]) {
            this.iso = response["iso-number"];
        } else {
            console.log("There was an error calling getIsoNumber: " + response["error"]);
        }
        // this.setActionPending(false, "");
    }

    // Set device ISO number
    setIsoNumber(): void {
        // this.setActionPending(true, "Camera Busy: setting ISO number...");
        var response = this.electronService.ipcRenderer.sendSync("main", {
            "command": "setIso_server",
            "device-type": this.deviceType,
            "iso-number": this.iso
        });
        if (response["success"]) {
            this.iso = response["iso-number"];
        } else {
            console.log("There was an error calling setIsoNumber: " + response["error"]);
        }
        // this.setActionPending(false, "");
    }

    // Ensure user-specified capture count is valid
    checkCaptureCount(): void {
        console.log(this.captureCount);
        // if (this.captureCount <= 0) {
        //     // TODO(jordanhuus): notify user that the value was invalid
        //     this.captureCount = 1;
        // }
    }
}
