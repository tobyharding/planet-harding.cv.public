import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { ContactComponent }       from '../../core/contact/contact.component';
import { ExperienceComponent }    from '../../core/experience/experience.component';
import { EducationComponent }     from '../../core/education/education.component';
import { OverviewComponent }      from '../../core/overview/overview.component';
import { ProjectsComponent }      from '../../core/projects/projects.component';
import { PublicationsComponent }  from '../../core/publications/publications.component';
import { VolunteeringComponent }  from '../../core/volunteering/volunteering.component';

const routes: Routes = [
  { path: '',               redirectTo: '/overview', pathMatch: 'full' },
  { path: 'contact',        component: ContactComponent },
  { path: 'experience',     component: ExperienceComponent },
  { path: 'education',      component: EducationComponent },
  { path: 'overview',       component: OverviewComponent },
  { path: 'projects',       component: ProjectsComponent },
  { path: 'publications',   component: PublicationsComponent },
  { path: 'volunteering',   component: VolunteeringComponent },
  { path: 'about',          loadChildren: () => import('../../core/about/about.module').then(m => m.AboutModule) },
  { path: 'converter',      loadChildren: () => import('../../core/projects/pig-latin-converter/converter.module').then(m => m.ConverterModule) },
  { path: '**',             redirectTo: 'overview' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
