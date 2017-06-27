import {Component, OnInit} from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .z-0{
      z-index: 0;
    }

  `],
})
export class AppComponent {
  title = 'Cinemania';

  routes: Object[] = [
    {
      title: 'Top Movies',
      route: 'movies',
      icon: 'local_movies',
    }, {
      title: 'Genres',
      route: 'genres',
      icon: 'view_carousel',
    }, {
      title: 'People',
      route: 'people',
      icon: 'person',
    }, {
      title: 'Tv - Series',
      route: 'series',
      icon: 'tv',
    },
  ];

  constructor(private _iconRegistry: MdIconRegistry,
              private _domSanitizer: DomSanitizer) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'tmdb',
      this._domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/tmdb-icon-blue.svg'));
  }
}
