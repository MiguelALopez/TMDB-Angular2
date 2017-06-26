import {Component, OnInit} from "@angular/core";
import {SearchService} from '../../Services/search.service';

import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})

export class SearchComponent implements OnInit {
  private searchInputTerm = new Subject<string>();
  complete: Observable<Array<any>>;
  results = [];
  searchBoxTerm: string = '';
  debounce: number = 0;
  alwaysVisible: boolean = false;

  constructor(private searchService: SearchService){
  }

  ngOnInit(){
    this.complete = this.searchInputTerm
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ?
        this.searchService.searchMulti(term).map(response => response['results'])
        : Observable.of<Array<any>>([])).do(response => {
        console.log(response);
        this.results = response;
        // response.length > 0 ? this.isEmpty = true: this.isEmpty=false;
      });
  }

  search($event: string): void {
    this.searchInputTerm.next($event);
  }

  clear(){
    this.searchInputTerm.next('');
  }
}
