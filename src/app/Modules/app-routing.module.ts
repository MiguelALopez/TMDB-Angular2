import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopMoviesComponent} from '../Components/top-movies/top-movies.component'

const routes: Routes = [
  // {path: ''},
  {path: '', component: TopMoviesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
