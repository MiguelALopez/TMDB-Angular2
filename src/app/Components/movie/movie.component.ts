import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MovieService} from '../../Services/movie.service';
import {CREDENTIALS} from '../../Static/credentials';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})

export class MovieComponent implements OnInit {
  cred = CREDENTIALS;
  movie = [];

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

  getGenre(genres: Array<any>): string {
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

  convertTime(minutes: number): string {
    let text = '';
    if(minutes){
      text += Math.floor(minutes / 60) + 'h ';
      if(minutes % 60 != 0){
        text += (minutes % 60) + 'min';
      }
    }

    return text;
  }

  convertMoney(budget: number): string{
    let text = '$';
    if(budget){
      let buffer = '' + budget;
      for(let _i = 0; _i < buffer.length; _i++){
        if(_i % 3 == 0 && _i != 0){
          text += ',' + buffer[_i];
        }else{
          text += buffer[_i];
        }
      }
    }
    return text;
  }
}
