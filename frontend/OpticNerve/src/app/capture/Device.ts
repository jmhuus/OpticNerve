export class Device {
  public id: number;
  public manufacturer: string;
  public model: string;
  public iProduct: number;
  public iVendor: number;
  public live_view_image: string;

  // User-specified settings
  public shooting_mode: string;
  public aperture: number;
  public shutter: number;
  public iso: number;

  public constructor(manufacturer: string,
                     model: string,
		     iProduct: number,
		     iVendor: number,
		     shooting_mode: string,
		     aperture: number,
		     shutter: number,
		     iso: number) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.iProduct = iProduct;
    this.iVendor = iVendor;
    this.shooting_mode = shooting_mode;
    this.aperture = aperture;
    this.shutter = shutter;
    this.iso = iso;
    this.live_view_image = "assets/ubuntu_wallpaper_2.jpg";
  }

  /*
  Set the perferred shooting mode
  M -> manual mode       A -> aperture priority
  S -> shutter priority  P -> programmed
  */
  setShootingMode(mode: string): void {
    let modes: string[] = ['M', 'A', 'S', 'P'];
    if(modes.includes(mode)) {
      this.shooting_mode = mode;   
    }
  }
}