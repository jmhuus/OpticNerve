import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'capture',
        loadChildren: () => import('./capture/capture.module').then(m => m.CaptureModule)
    },
    {
        path: '',
        redirectTo: 'capture',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
