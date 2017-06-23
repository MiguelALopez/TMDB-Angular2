import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {CREDENTIALS} from '../Static/credentials'

@Injectable()
export class MovieService {
  constructor(private http: Http) {
  }

  getMovie(id: number): Observable<JSON> {
    const url = CREDENTIALS.apiUrl +
      '/3/movie/' + id +
      '?api_key=' + CREDENTIALS.apiKey +
      '&language=en-US';
    return this.http.get(url).map(response => response.json());
  }
}
