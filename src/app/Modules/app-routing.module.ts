import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopMoviesComponent} from '../Components/top-movies/top-movies.component';
import {MovieComponent} from '../Components/movie/movie.component';

const routes: Routes = [
  {path: '', component: TopMoviesComponent},
  {path:'movie/:id', component: MovieComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
