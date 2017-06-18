// External modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules for UI elements
import {AppCustomMaterialModule} from './Modules/app-custom-material.module'

// Own modules
import { AppComponent } from './Components/app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppCustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
