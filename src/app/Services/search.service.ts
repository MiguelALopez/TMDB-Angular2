import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {CREDENTIALS} from '../Static/credentials';

@Injectable()
export class SearchService{
  url = CREDENTIALS.apiUrl + '/3/search';

  constructor(private http:Http){
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
   * This function make a search to get movies, series and people,
   * for mor information of the api TMDB
   * https://developers.themoviedb.org/3/search/multi-search
   * @param query: This is the text to do the search
   * @returns {Observable<any>}: This is an observable with the response
   */
  searchMulti(query: string): Observable<Array<any>> {
    const url = this.url + '/multi';
    const args = '&page=1' +
      '&query=' + query +
      '&include_adult=false';
    return this.sendRequest(url ,args);
  }

  /**
   * This function search for people,
   * for mor information of the api TMDB
   * https://developers.themoviedb.org/3/search/search-people
   * @param query: This is the text to do the search
   * @returns {Observable<any>}: This is an observable with the response
   */
  searchPerson(query: string): Observable<Array<any>> {
    const url = this.url + '/person';
    const args = '&page=1' +
      '&query=' + query +
      '&include_adult=false';
    return this.sendRequest(url ,args);
  }

  /**
   * This function search for movies,
   * for mor information of the api TMDB
   * https://developers.themoviedb.org/3/search/search-movies
   * @param query: query: This is the text to do the search
   * @returns {Observable<any>}: This is an observable with the response
   */
  searchMovie(query: string): Observable<Array<any>> {
    const url = this.url + '/movie';
    const args = '&page=1' +
      '&query=' + query +
      '&include_adult=false';
    return this.sendRequest(url ,args);
  }

  /**
   * This funcion search for Tv shows,
   * for mor information of the api TMDB
   * https://developers.themoviedb.org/3/search/search-tv-shows
   * @param query: query: This is the text to do the search
   * @returns {Observable<any>}: This is an observable with the response
   */
  searchTvShow(query: string): Observable<Array<any>> {
    const url = this.url + '/tv';
    const args = '&page=1' +
      '&query=' + query +
      '&include_adult=false';
    return this.sendRequest(url ,args);
  }


}
