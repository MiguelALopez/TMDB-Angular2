import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MovieService} from '../../../Services/movie.service';
import {CREDENTIALS} from '../../../Static/credentials';

// For pagination
import {TdMediaService} from '@covalent/core';
import {Subscription} from 'rxjs/Subscription';

// Load service
import {TdLoadingService} from '@covalent/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService, TdMediaService]
})

export class MovieComponent implements OnInit, OnDestroy {
  // Used for responsive services
  isDesktop: boolean = false;
  querySize = 'gt-sm';
  private _querySubscription: Subscription;

  apiImg = CREDENTIALS.apiImg + 'original';
  movie = [];
  credits = [];

  routes: Object[] = [
    {
      title: 'Images',
      value: '1',
      icon: 'image',
    }, {
      title: 'Videos',
      value: '2',
      icon: 'local_movies',
    }, {
      title: 'Cast',
      value: '3',
      icon: 'person',
    },
  ];

  currentTab = 1;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private _mediaService: TdMediaService,
              private _ngZone: NgZone,
              private _loadingService: TdLoadingService) {
  }

  ngOnInit() {
    this.registerLoading();

    this.updateMovie();
    this.updateCredits();

    this.checkScreen();
    this.watchScreen();
  }

  updateMovie(): void {
    this.route.params.switchMap((params: Params) => this.movieService
      .getDetails(params['id']))
      .subscribe(movie => {
        this.movie = movie;
        this.resolveLoading();
      });
  }
  updateCredits(): void {
    this.route.params.switchMap((params: Params) => this.movieService
      .getCredits(params['id']))
      .subscribe(credits => {
        this.credits = credits;
        console.log(this.credits);
      });
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
    });
  }

  /**
   * This method subscribe with the service 'TdMediaService' to detect changes on the size of the screen
   */
  watchScreen(): void {
    this._querySubscription = this._mediaService.registerQuery(this.querySize).subscribe((matches: boolean) => {
      this._ngZone.run(() => {
        this.isDesktop = matches;
      });
    });
  }

  /**
   * In charge to get an array of genres and return its separated by comma
   * @param genres: Array of genres
   * @returns {string}: List of genres separated by comma
   */
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

  /**
   * In charge to get time in minutes and return its in the format HH:mm
   * @param minutes: Integer with the minutes
   * @returns {string}: Time with the new format
   */
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

  /**
   * In charge to get a budget and return its with the format of money
   * @param budget: Integer with the budget
   * @returns {string}: Budget with the new format
   */
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

  changeTab(tab: number): void {
    this.currentTab = tab;
  }

  // Methods for the loading
  registerLoading(): void {
    this._loadingService.register('movie');
  }

  resolveLoading(): void {
    this._loadingService.resolve('movie');
  }

  changeValue(value: number): void { // Usage only enabled on [LoadingMode.Determinate] mode.
    this._loadingService.setValue('movie', value);
  }
}
