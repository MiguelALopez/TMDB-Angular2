import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {CREDENTIALS} from '../Static/credentials'

@Injectable()
export class MovieService {
  url = CREDENTIALS.apiUrl + '/3/movie/';

  constructor(private http: Http) {
  }

  /**
   * This function obtain the details of a specific movie, for more information of the api TMDB
   * https://developers.themoviedb.org/3/movies/get-movie-details
   * @param id: This is the ID of the movie
   * @returns {Observable<R>}: Results with the detail of a movie
   */
  getDetails(id: number): Observable<Array<any>> {
    const url = this.url + id +
      '?api_key=' + CREDENTIALS.apiKey +
      '&language=en-US';
    return this.http.get(url).map(response => response.json());
  }

  /**
   * This function obtain the credits of a specific movie, for more information of the api TMDB
   * https://developers.themoviedb.org/3/movies/get-movie-credits
   * @param id: This is the ID of the movie
   * @returns {Observable<R>}: Results with the credits of a specific movie
   */
  getCredits(id: number): Observable<Array<any>> {
    const url = this.url + id + '/credits' +
      '?api_key=' + CREDENTIALS.apiKey +
      '&language=en-US';
    return this.http.get(url).map(response => response.json());
  }
}
