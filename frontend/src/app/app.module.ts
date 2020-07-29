import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptureComponent } from './capture/capture.component';

@NgModule({
    declarations: [
	AppComponent,
	CaptureComponent
    ],
    imports: [
	BrowserModule,
	AppRoutingModule,
	FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
