import {NgModule} from '@angular/core';

// Modules for UI elements
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material Componets
import {MdListModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdIconRegistry} from '@angular/material'
import {MdMenuModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

// Covalent Components
import {CovalentLayoutModule} from '@covalent/core';
import {CovalentMenuModule} from '@covalent/core';
import {CovalentSearchModule} from '@covalent/core';
import {CovalentHttpModule} from '@covalent/http';
import {CovalentMediaModule} from '@covalent/core';
import {CovalentPagingModule} from '@covalent/core';
import {CovalentLoadingModule} from '@covalent/core';


@NgModule({
  imports: [
    // UI modules
    BrowserAnimationsModule,
    MdListModule,
    MdIconModule,
    MdMenuModule,
    MdTabsModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    CovalentLayoutModule,
    CovalentMenuModule,
    CovalentSearchModule,
    CovalentHttpModule,
    CovalentMediaModule,
    CovalentPagingModule,
    CovalentLoadingModule

  ],
  exports: [
    BrowserAnimationsModule,
    MdListModule,
    MdIconModule,
    MdMenuModule,
    MdTabsModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    CovalentLayoutModule,
    CovalentMenuModule,
    CovalentSearchModule,
    CovalentHttpModule,
    CovalentMediaModule,
    CovalentPagingModule,
    CovalentLoadingModule
  ]
})

export class AppCustomMaterialModule {
  constructor(mdIconRegistriy: MdIconRegistry) {
    mdIconRegistriy.registerFontClassAlias('fontawesome', 'fa');
  }
}
