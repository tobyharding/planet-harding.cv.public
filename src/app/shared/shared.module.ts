import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

import { LocalizationComponent }    from './helpers/l10n/l10n.component';
import { PictureModalComponent }    from './helpers/picture-modal/picture-modal.component';

import { CvItemDirective }          from './directives/cv-item.directive';
import { SetBGImageDirective }      from './directives/background-image.directive';

import { MaterialModule }           from './modules/material.module';

@NgModule({
    declarations: [
        LocalizationComponent,
        PictureModalComponent,
        CvItemDirective,
        SetBGImageDirective,
    ],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        CommonModule,
        MaterialModule,
        LocalizationComponent,
        PictureModalComponent,
        CvItemDirective,
        SetBGImageDirective,
    ],
    entryComponents: [
        PictureModalComponent
    ]
})
export class SharedModule {}