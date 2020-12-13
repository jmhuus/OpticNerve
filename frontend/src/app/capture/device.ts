export class Device {
    public id: number;
    public manufacturer: string;
    public model: string;
    public iProduct: number;
    public iVendor: number;
    public live_view_image: string;
    public image_latest_path: string;

    // User-specified settings
    public shooting_mode: string;
    public aperture: number;
    public aperture_options: number[];
    public shutter: number;
    public shutter_options: number[];
    public iso: number;
    public device_type: string;

    public constructor(
        manufacturer: string,
        model: string,
        iProduct: number,
        iVendor: number,
        shooting_mode: string,
        aperture: number,
        shutter: number,
        iso: number,
        device_type: string) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.iProduct = iProduct;
        this.iVendor = iVendor;
        this.shooting_mode = shooting_mode;
        this.aperture = aperture;
        this.shutter = shutter;
        this.iso = iso;
        this.image_latest_path = "assets/images/milky_way_image_pending.jpg";
        this.device_type = device_type;
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
}
