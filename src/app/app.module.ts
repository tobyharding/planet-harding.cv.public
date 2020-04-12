import { NgModule }                 from '@angular/core';
import { BrowserModule, Title }     from '@angular/platform-browser';

import { AppComponent }             from './app.component';

import { AppRoutingModule }         from './shared/modules/app-routing.module';
import { CoreModule }               from './core/core.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Title
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
