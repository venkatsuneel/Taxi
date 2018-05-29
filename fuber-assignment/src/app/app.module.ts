import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FuberComponent } from './app.component';

@NgModule({
  declarations: [
    FuberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FuberComponent]
})
export class AppModule { }
