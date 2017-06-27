import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {TopMoviesService} from '../../Services/top-movies.service';
import {CREDENTIALS} from '../../Static/credentials';
import {GENRES} from '../../Static/genres';
import {IPageChangeEvent} from '@covalent/core';

import {TdMediaService} from '@covalent/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css'],
  providers: [TopMoviesService]
})

export class TopMoviesComponent implements OnInit, OnDestroy {
  // Used for responsive services
  isDesktop: boolean = false;
  querySize = 'gt-xs';
  private _querySubscription: Subscription;

  // Used for the pagination
  event: IPageChangeEvent;
  firstLast = true;
  pageSizeAll = false;
  pageLinkCount = 5;

  page: number;
  total_pages: number;
  total_results: number;
  response = [];
  movies = [];
  apiImg = CREDENTIALS.apiImg + 'w500';

  constructor(private topMoviesService: TopMoviesService,
              private _mediaService: TdMediaService,
              private _ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.topMoviesService.getPopularMovies(1).subscribe(movies => {
      this.response = movies;
      this.movies = movies['results'];
      this.page = movies['page'];
      this.total_pages = movies['total_pages'];
      this.total_results = movies['total_results'];
      console.log(this.movies);
    });

    this.checkScreen();
    this.watchScreen();
  }

  ngOnDestroy(): void {
    this._querySubscription.unsubscribe();
  }

  /**
   * Check the size of the screen
   */
  checkScreen(): void {
    this._ngZone.run(() => {
      this.isDesktop = this._mediaService.query(this.querySize);
      if(this.isDesktop){
        this.pageLinkCount = 3;
      }else{
        this.pageLinkCount = 0;
      }
    });
  }

  /**
   * This method subscribe with the service 'TdMediaService' to detect changes on the size of the screen
   */
  watchScreen(): void {
    this._querySubscription = this._mediaService.registerQuery(this.querySize).subscribe((matches: boolean) => {
      this._ngZone.run(() => {
        this.isDesktop = matches;
        if(this.isDesktop){
          this.pageLinkCount = 3;
        }else{
          this.pageLinkCount = 0;
        }
      });
    });
  }

  /**
   * In charge to get an array of genres by id and return the name of these separated by comma
   * @param genresId: Array of genres by id
   * @returns {string}: List of genres separated by comma
   */
  getGenre(genresId: Array<number>): any {
    let genres = '';
    if (genresId){
      for (const id of genresId) {
        if (id === genresId[genresId.length - 1]) {
          genres += GENRES[id];
        } else {
          genres += GENRES[id] + ', ';
        }
      }
    }
    return genres;
  }

  /**
   * In charge to manage the behavior of the pagination
   * @param event: Event of change the page
   */
  change(event: IPageChangeEvent): void {
    this.event = event;
    this.topMoviesService.getPopularMovies(event.page).subscribe(movies => {
      this.response = movies;
      this.movies = movies['results'];
      this.page = movies['page'];
      this.total_pages = movies['total_pages'];
      this.total_results = movies['total_results'];
    });
  }
}
