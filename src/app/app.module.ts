import { NgModule }                 from '@angular/core';
import { BrowserModule, Title }     from '@angular/platform-browser';

import { AppComponent }             from './app.component';

import { CoreModule }               from './core/core.module';

@NgModule({
  imports: [
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
