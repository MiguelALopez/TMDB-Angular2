import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {TopMoviesComponent} from '../Components/top-movies/top-movies.component';
import {MovieComponent} from '../Components/movie/movie.component';
import {ListPeopleComponent} from '../Components/list-people/list-people.component';
import {ListSeriesComponent} from '../Components/list-series/list-series.component';
import {SerieComponent} from '../Components/serie/serie.component';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', component: TopMoviesComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'genres', component: TopMoviesComponent},
  {path: 'people', component: ListPeopleComponent},
  {path: 'series', component: ListSeriesComponent},
  {path: 'serie/:id', component: SerieComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
