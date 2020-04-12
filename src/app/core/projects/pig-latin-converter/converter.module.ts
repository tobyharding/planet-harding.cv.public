import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { ReactiveFormsModule }      from '@angular/forms';

import { ConverterComponent }       from './converter.component';

import { ConverterRoutingModule }   from './converter-routing.module';
import { SharedModule }             from '../../../shared/shared.module';

@NgModule({
    declarations: [
        ConverterComponent,
    ],
    imports: [
        CommonModule,
        ConverterRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    entryComponents: [
    ]
})
export class ConverterModule { };