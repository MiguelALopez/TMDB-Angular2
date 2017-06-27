import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SerieService} from '../../Services/serie.service';
import {CREDENTIALS} from '../../Static/credentials';

import {TdMediaService} from '@covalent/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
  providers: [SerieService, TdMediaService]
})

export class SerieComponent implements OnInit, OnDestroy {
  // Used for responsive services
  isDesktop: boolean = false;
  querySize = 'gt-sm';
  private _querySubscription: Subscription;

  apiImg = CREDENTIALS.apiImg + 'original';
  serie = [];
  credits = [];

  constructor(private serieService: SerieService,
              private route: ActivatedRoute,
              private _mediaService: TdMediaService,
              private _ngZone: NgZone) {
  }

  ngOnInit() {
    this.updateSeries();
    this.updateCredits();

    this.checkScreen();
    this.watchScreen();
  }

  updateSeries(): void{
    this.route.params.switchMap((params: Params) => this.serieService
      .getDetails(params['id']))
      .subscribe(serie => {
        this.serie = serie;
        console.log(this.serie);
      });
  }

  updateCredits(){
    this.route.params.switchMap((params: Params) => this.serieService
      .getCredits(params['id']))
      .subscribe(credits => {
        this.credits = credits;
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
  convertTime(time: Array<number>): string {
    let min = -1;
    let max = 0;

    for (let n of time){
      if(n < min || min == -1){
        min = n;
      }
      if(n > max){
        max = n;
      }
    }
    if (min == max){
      return min + ' min';
    }else {
      return min + ' - ' + max + ' min';

    }

  }

}
