import {Component} from "@angular/core";

import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})

export class FooterComponent{

  constructor(private _iconRegistry: MdIconRegistry,
              private _domSanitizer: DomSanitizer) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'tmdb',
      this._domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/tmdb-icon-blue.svg'));
  }

}
