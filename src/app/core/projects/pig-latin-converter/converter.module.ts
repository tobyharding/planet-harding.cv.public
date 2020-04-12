import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ConverterComponent } from "./converter.component";

import { ConverterRoutingModule } from "./converter-routing.module";
import { MaterialModule } from '../../../modules/material.module';

@NgModule({
    declarations: [
        ConverterComponent,
    ],
    imports: [
        CommonModule,
        ConverterRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    entryComponents: [
    ]
})
export class ConverterModule { };