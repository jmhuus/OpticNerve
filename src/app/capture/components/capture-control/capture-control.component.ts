import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Device } from '../../device';
import { interval } from 'rxjs';

export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
}

@Component({
    selector: 'app-capture-control',
    templateUrl: './capture-control.component.html',
    styleUrls: ['./capture-control.component.css']
})
export class CaptureControlComponent implements OnInit {
    tiles: Tile[] = [
        { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
        { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
        { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
        { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    ];

    form: FormGroup;
    captureCount: FormControl;
    exposure: FormControl;
    fNumber: FormControl;
    iso: FormControl;

    @Input('chosenDevice') public chosenDevice: Device;

    constructor() { }

    ngOnInit(): void {

    }

    ngOnChanges(): void {
        if (this.chosenDevice) {
            this.createFormControls();
            this.createForm();

            // F-number takes a while to set, wait until ready
            let subscription = interval(1000).subscribe(() => {
                if (this.chosenDevice) {
                    if (this.chosenDevice.fNumber) {
                        this.fNumber = new FormControl(
                            this.chosenDevice.fNumber, Validators.required);
                        this.fNumber.valueChanges.subscribe(val => {
                            this.chosenDevice.fNumber = val;
                            this.chosenDevice.setFNumber();
                        });
                        this.form.addControl('fNumber', this.fNumber);
                        subscription.unsubscribe();
                    }
                }
            });
        }
    }

    createFormControls(): void {
        this.exposure = new FormControl(
            this.chosenDevice.exposureTime, Validators.required);
        this.iso = new FormControl(
            this.chosenDevice.iso, Validators.required);
        this.captureCount = new FormControl(
            this.chosenDevice.captureCount, Validators.required);

        this.exposure.valueChanges.subscribe(val => {
            this.chosenDevice.exposureTime = val;
            this.chosenDevice.setExposure();
        });
        this.iso.valueChanges.subscribe(val => {
            this.chosenDevice.iso = val;
            this.chosenDevice.setIsoNumber();
        });
        this.captureCount.valueChanges.subscribe(val => {
            this.chosenDevice.captureCount = val;
        });

    }

    createForm(): void {
        this.form = new FormGroup({
            captureCount: this.captureCount,
            exposure: this.exposure,
            iso: this.iso
        });
    }

    captureImage(formValue: any): void {
        this.chosenDevice.captureImage();
        console.log(this.chosenDevice);
    }
}
