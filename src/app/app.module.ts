/* tslint:disable:import-spacing */
import { NgModule }                 from '@angular/core';
import { BrowserModule, Title }     from '@angular/platform-browser';
import { HttpClientModule }         from '@angular/common/http';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

import { AppRoutingModule }         from './modules/app-routing.module';
import { MaterialModule }           from './modules/material.module';

import { AppComponent }             from './app.component';

import { ContactComponent }         from './core/contact/contact.component';
import { CvItemComponent }          from './core/cv-item/cv-item.component';
import { EducationComponent }       from './core/education/education.component';
import { ExperienceComponent }      from './core/experience/experience.component';
import { FooterComponent }          from './core/footer/footer.component';
import { HeaderComponent }          from './core/header/header.component';
import { OverviewComponent }        from './core/overview/overview.component';
import { ProjectsComponent }        from './core/projects/projects.component';

import { LocalizationComponent }    from './helpers/l10n/l10n.component';
import { PictureModalComponent }    from './helpers/picture-modal/picture-modal.component';

import { CvItemDirective }          from './directives/cv-item.directive';
import { SetBGImageDirective }      from './directives/background-image.directive';

import { CarouselService }          from './services/carousel.service';
import { CvItemService }            from './services/cv-item.service';
import { FeatureToggleService }     from './services/feature-toggle.service';
import { LocalizationService }      from './services/l10n.service';
import { PublicationsComponent } from './core/publications/publications.component';
import { VolunteeringComponent } from './core/volunteering/volunteering.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    ContactComponent,
    CvItemComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    LocalizationComponent,
    OverviewComponent,
    PictureModalComponent,
    ProjectsComponent,
    PublicationsComponent,
    VolunteeringComponent,
    CvItemDirective,
    SetBGImageDirective
  ],
  providers: [
    Title,
    CarouselService,
    CvItemService,
    FeatureToggleService,
    LocalizationService,
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    PictureModalComponent,
  ],
})
export class AppModule { }
