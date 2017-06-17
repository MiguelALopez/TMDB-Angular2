// External modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules for UI elements
import {MdListModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CovalentLayoutModule} from '@covalent/core';

// Own modules
import { AppComponent } from './Components/app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdListModule,
    BrowserAnimationsModule,
    CovalentLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
