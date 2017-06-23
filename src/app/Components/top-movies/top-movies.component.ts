import { Component, OnInit } from '@angular/core';
import {TopMoviesService} from '../../Services/top-movies.service';
import {CREDENTIALS} from '../../Static/credentials';
import {GENRES} from '../../Static/genres';
import { IPageChangeEvent } from '@covalent/core';
import {debug} from "util";

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css'],
  providers: [TopMoviesService]
})

export class TopMoviesComponent implements OnInit {
  event: IPageChangeEvent;
  firstLast = true;
  pageSizeAll = false;

  page: number;
  total_pages: number;
  total_results: number;
  response: JSON;
  movies: JSON;
  apiImg = CREDENTIALS.apiImg;

  constructor(private topMoviesService: TopMoviesService) {
  }

  ngOnInit(): void {
    this.topMoviesService.getMovies(1).then(movies => {
      this.response = movies;
      this.movies = movies['results'];
      this.page = movies['page'];
      this.total_pages = movies['total_pages'];
      this.total_results = movies['total_results'];
      console.log(this.response);
    });

  }

  getGenre(ids): any {
    let genres = '';
    for (const id of ids) {
      if (id === ids[ids.length - 1]) {
        genres += GENRES[id];
      }else {
        genres += GENRES[id] + ', ';
      }
    }
    return genres;
  }

  change(event: IPageChangeEvent): void {
    this.event = event;
    this.topMoviesService.getMovies(event.page).then(movies => {
      this.response = movies;
      this.movies = movies['results'];
      this.page = movies['page'];
      this.total_pages = movies['total_pages'];
      this.total_results = movies['total_results'];
    });
    console.log(event.page);
  }

  toggleFirstLast(): void {
    this.firstLast = !this.firstLast;
  }

}
