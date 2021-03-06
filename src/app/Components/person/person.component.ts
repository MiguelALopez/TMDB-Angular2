import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PersonService} from '../../Services/person.service';
import {CREDENTIALS} from '../../Static/credentials';

// For pagination
import {TdMediaService} from '@covalent/core';
import {Subscription} from 'rxjs/Subscription';

// Load service
import {TdLoadingService} from '@covalent/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [PersonService, TdMediaService]
})

export class PersonComponent implements OnInit, OnDestroy {
  // Used for responsive services
  isDesktop: boolean = false;
  querySize = 'gt-sm';
  private _querySubscription: Subscription;

  apiImg = CREDENTIALS.apiImg + 'original';
  person = [];
  // credits = [];

  constructor(private personService: PersonService,
              private route: ActivatedRoute,
              private _mediaService: TdMediaService,
              private _ngZone: NgZone,
              private _loadingService: TdLoadingService) {
  }

  ngOnInit() {
    this.registerLoading();

    this.updatePerson();

    this.checkScreen();
    this.watchScreen();
  }

  updatePerson(): void {
    this.route.params.switchMap((params: Params) => this.personService
      .getDetails(params['id']))
      .subscribe(movie => {
        this.person = movie;
        this.resolveLoading();
        // console.log(this.person);
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


  getMovie(names: Array<any>): string {
    if(names){
      return names[0];
    }else {
      return '';
    }
  }

  getPopularity(popularity: number): string {
    return (Math.floor(popularity * 10) / 10) + '';
  }

  // Methods for the loading
  registerLoading(): void {
    this._loadingService.register('person');
  }

  resolveLoading(): void {
    this._loadingService.resolve('person');
  }

  changeValue(value: number): void { // Usage only enabled on [LoadingMode.Determinate] mode.
    this._loadingService.setValue('person', value);
  }

}
