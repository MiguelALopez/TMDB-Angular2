import { Component, OnInit } from '@angular/core';
import {TopMoviesService} from '../../Services/top-movies.service';

@Component({
  selector: 'hero-search',
  templateUrl: './top-movies.component.html',
  providers: [TopMoviesService]
  // styleUrls: [ './' ],
})

export class TopMoviesComponent implements OnInit{
  movies : JSON;

  constructor(private topMoviesService: TopMoviesService){
  }

  ngOnInit(): void{
    this.topMoviesService.getMovies().then(movies => {this.movies = movies; console.log(this.movies);});
  }
}
