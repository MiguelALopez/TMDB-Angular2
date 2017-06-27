import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {IPageChangeEvent} from '@covalent/core';

// Services
import {PeopleService} from '../../Services/list-people.service';

// For pagination
import {TdMediaService} from '@covalent/core';
import {Subscription} from 'rxjs/Subscription';


import {CREDENTIALS} from '../../Static/credentials';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  providers: [PeopleService]
})

export class ListPeopleComponent implements OnInit, OnDestroy{
  // Used for responsive services
  isDesktop: boolean = false;
  querySize = 'gt-xs';
  private _querySubscription: Subscription;

  apiImg = CREDENTIALS.apiImg + 'w500_and_h500_bestv2';

  // Data of response
  results = [];
  people = [];
  matrixPeople = [];
  page: number;
  total_pages: number;
  total_results: number;


  // Used for the pagination
  event: IPageChangeEvent;
  firstLast = true;
  pageSizeAll = false;
  pageLinkCount = 5;

  constructor(private peopleService: PeopleService,
              private _mediaService: TdMediaService,
              private _ngZone: NgZone){
  }

  ngOnInit() {
    this.peopleService.getPopular(1).subscribe(people =>{
      this.results = people;
      this.people = people['results'];
      this.matrixPeople = this.buildPeopleArray(people['results']);
      this.page = people['page'];
      this.total_pages = people['total_pages'];
      this.total_results = people['total_results'];
      console.log(this.results);
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
        this.matrixPeople = this.buildPeopleArray(this.people);
        if(this.isDesktop){
          this.pageLinkCount = 3;
        }else{
          this.pageLinkCount = 0;
        }
      });
    });
  }


  /**
   * In charge to manage the behavior of the pagination
   * @param event: Event of change the page
   */
  change(event: IPageChangeEvent): void {
    this.event = event;
    this.peopleService.getPopular(event.page).subscribe(people => {
      this.results = people;
      this.people = people['results'];
      this.matrixPeople = this.buildPeopleArray(people['results']);
      this.page = people['page'];
      this.total_pages = people['total_pages'];
      this.total_results = people['total_results'];
    });
  }

  buildPeopleArray(people: Array<any>): Array<Array<any>> {
    let matrix = [];
    let divitions = 2;
    if(this.isDesktop){
      divitions = 4;
    }

    for (let _i = 0; _i < people.length ;){
      let buff = [];
      for(let _j=0; _j < divitions; _j++, _i++){
        buff.push(people[_i]);
      }
      matrix.push(buff);
    }
    return matrix;
  }

  getMovie(movies: Array<any>): string {
    if(movies){
      return movies[0]['original_title'];
    }else {
      return '';
    }
  }
}
