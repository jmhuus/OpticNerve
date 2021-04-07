import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../device';

@Component({
    selector: 'app-image-result',
    templateUrl: './image-result.component.html',
    styleUrls: ['./image-result.component.css']
})
export class ImageResultComponent implements OnInit {
    @Input('chosenDevice') public chosenDevice: Device;

    constructor() { }

    ngOnInit(): void {
    }

    chooseImage(image: string): void {
        this.chosenDevice.imageLatestName = image;
    }
}
