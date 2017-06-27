// External modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules for UI elements
import {AppCustomMaterialModule} from './Modules/app-custom-material.module';

// Own modules
import {AppRoutingModule} from './Modules/app-routing.module';

// Own Components
import {AppComponent} from './Components/app/app.component';
import {FooterComponent} from './Components/footer/footer.component';
import {TopMoviesComponent} from './Components/top-movies/top-movies.component';
import {MovieComponent} from './Components/movie/movie-detail/movie.component';
import {ListPeopleComponent} from './Components/list-people/list-people.component';
import {SearchComponent} from './Components/search/search.component';
import {ListSeriesComponent} from './Components/list-series/list-series.component';
import {SerieComponent} from './Components/serie/serie.component';
import {PersonComponent} from './Components/person/person.component';
import {MovieVideosComponent} from './Components/movie/movie-videos/movie-videos.component';
import {MovieImagesComponent} from  './Components/movie/movie-images/movie-images.component';
import {MovieCastComponent} from './Components/movie/movie-cast/movie-cast.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopMoviesComponent,
    MovieComponent,
    ListPeopleComponent,
    SearchComponent,
    ListSeriesComponent,
    SerieComponent,
    PersonComponent,
    MovieVideosComponent,
    MovieImagesComponent,
    MovieCastComponent,
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
