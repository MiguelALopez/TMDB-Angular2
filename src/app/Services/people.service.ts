import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import {CREDENTIALS} from '../Static/credentials'


@Injectable()
export class PeopleService {
  url = CREDENTIALS.apiUrl + '/3/person';

  constructor(private http: Http) {
  }

  /**
   * In charge to send a petition to the api TMDB from with the correspondent URL
   * @param url
   * @param args
   * @returns {Observable<R>}
   */
  sendRequest(url: string, args: string): Observable<any> {
    url += ('?api_key=' + CREDENTIALS.apiKey +
    '&language=en-US' + args);
    return this.http.get(url).map(response => response.json());
  }

  /**
   * This function obtain the details of a specific person,
   * for more information of the api TMDB
   * https://developers.themoviedb.org/3/people/get-person-details
   * @param person_id: This is the ID of the person in TMDB database
   * @returns {Observable<any>}: Results with the detail of a person
   */
  getDetails(person_id: number): Observable<Array<any>> {
    const url = this.url + person_id;
    const args = '';
    return this.sendRequest(url, args);
  }

  /**
   * This function obtain a list of the most newly created person,
   * for more information of the api TMDB
   * https://developers.themoviedb.org/3/people/get-latest-person
   * @returns {Observable<any>}: Results with the list of the latest people
   */
  getLatest(page: number): Observable<Array<any>> {
    const url = this.url + '/latest';
    const args = '&page=' + page;
    return this.sendRequest(url, args);
  }

  /**
   * This function obtain a list of popular people,
   * for more information of the api TMDB
   * https://developers.themoviedb.org/3/people/get-popular-people
   * @returns {Observable<any>}: Results with the list ot the most popular people
   */
  getPopular(page: number): Observable<Array<any>> {
    const url = this.url + '/popular';
    const args = '&page=' + page;
    return this.sendRequest(url, args);
  }
}


