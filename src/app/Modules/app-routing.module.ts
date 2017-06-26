import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {TopMoviesComponent} from '../Components/top-movies/top-movies.component';
import {MovieComponent} from '../Components/movie/movie.component';
import {ListPeopleComponent} from '../Components/list-people/list-people.component';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', component: TopMoviesComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'genres', component: TopMoviesComponent},
  {path: 'people', component: ListPeopleComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
