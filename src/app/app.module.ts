// External modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules for UI elements
import {AppCustomMaterialModule} from './Modules/app-custom-material.module';

// Own modules
import {AppRoutingModule} from './Modules/app-routing.module';

// Own Components
import {AppComponent} from './Components/app/app.component';
import {TopMoviesComponent} from './Components/top-movies/top-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
