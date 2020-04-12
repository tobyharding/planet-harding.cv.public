import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

import { ContactComponent }         from './contact/contact.component';
import { CvItemComponent }          from './cv-item/cv-item.component';
import { EducationComponent }       from './education/education.component';
import { ExperienceComponent }      from './experience/experience.component';
import { FooterComponent }          from './footer/footer.component';
import { HeaderComponent }          from './header/header.component';
import { OverviewComponent }        from './overview/overview.component';
import { ProjectsComponent }        from './projects/projects.component';
import { PublicationsComponent }    from './publications/publications.component';
import { VolunteeringComponent }    from './volunteering/volunteering.component';

import { SharedModule }             from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [
    ContactComponent,
    CvItemComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    OverviewComponent,
    ProjectsComponent,
    PublicationsComponent,
    VolunteeringComponent
  ],
  exports: [
      FooterComponent,
      HeaderComponent
  ]
})
export class CoreModule { }