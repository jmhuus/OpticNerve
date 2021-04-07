import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureControlComponent } from './capture-control.component';

describe('CaptureControlComponent', () => {
  let component: CaptureControlComponent;
  let fixture: ComponentFixture<CaptureControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
