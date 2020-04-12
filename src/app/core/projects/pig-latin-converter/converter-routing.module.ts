import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ConverterComponent } from './converter.component';

const converterRoutes: Routes = [
    { path: '', component: ConverterComponent,}
]

@NgModule({
    imports: [
        RouterModule.forChild(converterRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ConverterRoutingModule { }