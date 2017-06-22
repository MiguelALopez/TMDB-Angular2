import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CREDENTIALS} from './credentials'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TopMoviesService {

  constructor(private  http: Http) {
  }

  getMovies(): Promise<JSON> {
    const url = CREDENTIALS.apiUrl +
      '3/discover/movie?api_key=' +
      CREDENTIALS.apiKey +
      '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

    return this.http.get(url).toPromise().then(response => response.json().results);

  }

}
