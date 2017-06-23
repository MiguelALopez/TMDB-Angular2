import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CREDENTIALS} from '../Static/credentials'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TopMoviesService {

  constructor(private  http: Http) {
  }

  getMovies(page: number): Observable<JSON> {
    const url = CREDENTIALS.apiUrl +
      '3/discover/' +
      'movie?api_key=' + CREDENTIALS.apiKey +
      '&language=en-US' +
      '&sort_by=popularity.desc' +
      '&include_adult=false' +
      '&include_video=false' +
      '&page=' + page;
    return this.http.get(url).map(response => response.json());
  }

}
