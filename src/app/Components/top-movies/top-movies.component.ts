import { Component, OnInit } from '@angular/core';
import {TopMoviesService} from '../../Services/top-movies.service';
import {CREDENTIALS} from '../../Services/credentials';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css'],
  providers: [TopMoviesService]
})

export class TopMoviesComponent implements OnInit {
  movies: JSON;
  apiImg = CREDENTIALS.apiImg;

  constructor(private topMoviesService: TopMoviesService) {
  }

  ngOnInit(): void {
    this.topMoviesService.getMovies().then(movies => {this.movies = movies; console.log(this.movies); });
  }
}
