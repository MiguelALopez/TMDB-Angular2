import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {CREDENTIALS} from '../Static/credentials'

@Injectable()
export class ListSeriesService {
  url = CREDENTIALS.apiUrl + '/3/tv/';

  constructor(private http: Http) {
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
   * In charge to get a list of series of the current day
   * https://developers.themoviedb.org/3/tv/get-tv-airing-today,
   * for more information of the api TMDB
   * @param page: This specified the number of the page for the search
   * @returns {Observable<any>}: Result with the list of Airing-Today series
   */
  getAiringTodaySerie(page: number): Observable<Array<any>> {
    const url = this.url + 'airing_today';
    const args = '&page=' + page;
    return this.sendRequest(url, args);
  }

  /**
   * In charge to get a list of series that are on air
   * https://developers.themoviedb.org/3/tv/get-tv-on-the-air,
   * for more information of the api TMDB
   * @param page: This specified the number of the page for the search
   * @returns {Observable<any>}: Result with the list of On-Air series
   */
  getOnAirSerie(page: number): Observable<Array<any>> {
    const url = this.url + 'on_the_air';
    const args = '&page=' + page;
    return this.sendRequest(url, args);
  }

  /**
   * In charge to get a list of series that are the most popular,
   * for more information of the api TMDB
   * https://developers.themoviedb.org/3/tv/get-popular-tv-shows
   * @param page: This specified the number of the page for the search
   * @returns {Observable<any>}: Result with the list of popular series
   */
  getPopularSerie(page: number): Observable<Array<any>> {
    const url = this.url + 'popular';
    const args = '&page=' + page;
    return this.sendRequest(url, args);
  }

  /**
   * In charge to get a list of series that are the most rated,
   * for more information of the api TMDB
   * https://developers.themoviedb.org/3/tv/get-top-rated-tv
   * @param page: This specified the number of the page for the search
   * @returns {Observable<any>}: Result with the list of top rated movies
   */
  getRatedSerie(page: number): Observable<Array<any>> {
    const url = this.url + 'top_rated';
    const args = '&page=' + page;
    return this.sendRequest(url, args);
  }
}
