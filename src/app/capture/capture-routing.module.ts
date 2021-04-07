import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const captureRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forChild(captureRoutes)],
    exports: [RouterModule]
})
export class CaptureRoutingModule { }
