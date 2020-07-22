import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaptureComponent } from './capture/capture.component';


const routes: Routes = [
      { path: '', component: CaptureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
