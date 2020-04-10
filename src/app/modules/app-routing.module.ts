import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../core/about/about.component';
import { ContactComponent } from '../core/contact/contact.component';
import { ConverterComponent } from '../core/projects/pig-latin-converter/converter.component';
import { ExperienceComponent } from '../core/experience/experience.component';
import { EducationComponent } from '../core/education/education.component';
import { OverviewComponent } from '../core/overview/overview.component';
import { ProjectsComponent } from '../core/projects/projects.component';
import { PublicationsComponent } from '../core/publications/publications.component';
import { VolunteeringComponent } from '../core/volunteering/volunteering.component';

const routes: Routes = [
  { path: '',               redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview',       component: OverviewComponent },
  { path: 'experience',     component: ExperienceComponent },
  { path: 'education',      component: EducationComponent },
  { path: 'publications',   component: PublicationsComponent },
  { path: 'projects',       component: ProjectsComponent },
  { path: 'volunteering',   component: VolunteeringComponent },
  { path: 'contact',        component: ContactComponent },
  { path: 'about',          component: AboutComponent },
  { path: 'converter',      component: ConverterComponent },
  { path: '**',             redirectTo: 'overview' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
