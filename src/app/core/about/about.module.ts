import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AboutComponent } from "./about.component";

import { AboutRoutingModule } from "./about-routing.module";
import { MaterialModule } from '../../modules/material.module';

@NgModule({
    declarations: [
        AboutComponent,
    ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        MaterialModule
    ],
    entryComponents: [
    ]
})
export class AboutModule { };