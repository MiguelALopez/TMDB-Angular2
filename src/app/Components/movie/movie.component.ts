import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MovieService} from '../../Services/movie.service';
import {CREDENTIALS} from '../../Static/credentials';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  providers: [MovieService]
})

export class MovieComponent implements OnInit {
  cred = CREDENTIALS;
  movie = [];

  color = 'primary';
  mode = 'determinate';
  value = 70;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.movieService
      .getMovie(params['id']))
      .subscribe(movie => {
        this.movie = movie;
        console.log(this.movie);
      });
  }

  getGenre(genres): string {
    let names = '';
    if(genres){
      for (const genre of genres) {
        if (genre === genres[genres.length - 1]) {
          names += genre['name'];
        } else {
          names += genre['name'] + ', ';
        }
      }
    }
    return names;
  }
}
