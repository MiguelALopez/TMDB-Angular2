import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CREDENTIALS} from '../Static/credentials'

import 'rxjs/add/operator/toPromise';
import {sendRequest} from "selenium-webdriver/http";

@Injectable()
export class TopMoviesService {
  url = CREDENTIALS.apiUrl + '/3/movie';

  constructor(private  http: Http) {
  }

  /**
   * In charge to send a petition to the api TMDB from with the correspondent URL
   * @param url: This is the route to obtain the resource
   * @param args: This is the additional arguments to the query, default value empty
   * @returns {Observable<R>}: This is an observable with the response
   */
  sendRequest(url: string, args= ''): Observable<any> {
    url += ('?api_key=' + CREDENTIALS.apiKey +
    '&language=en-US' + args);
    return this.http.get(url).map(response => response.json());
  }

  /**
   *
   * https://developers.themoviedb.org/3/movies/get-now-playing
   * @param page
   * @returns {Observable<any>}
   */
  getPlayingMovies(page: number): Observable<Array<any>> {
    const url = this.url + '/now_playing';
    const args = '&page=' + page;
    return this.sendRequest(url, args);
  }

  /**
   *
   * https://developers.themoviedb.org/3/movies/get-popular-movies
   * @param page
   * @returns {Observable<any>}
   */
  getPopularMovies(page: number): Observable<Array<any>> {
    const url = this.url + '/popular';
    const args = '&page=' + page;
    return this.sendRequest(url, args);
  }

  /**
   *
   * https://developers.themoviedb.org/3/movies/get-top-rated-movies
   * @param page
   * @returns {Observable<any>}
   */
  getRatedMovies(page: number): Observable<Array<any>> {
    const url = this.url + '/top_rated';
    const args = '&page=' + page;
    return this.sendRequest(url, args);
  }

  /**
   *
   * https://developers.themoviedb.org/3/movies/get-upcoming
   * @param page
   * @returns {Observable<any>}
   */
  getRatedUpcoming(page: number): Observable<Array<any>> {
    const url = this.url + '/upcoming';
    const args = '&page=' + page;
    return this.sendRequest(url, args);
  }

}
