import {NgModule} from '@angular/core';

// Modules for UI elements
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdListModule} from '@angular/material'
import {MdIconModule} from '@angular/material';
import {MdIconRegistry} from '@angular/material'
import {MdMenuModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {CovalentLayoutModule} from '@covalent/core';
import {CovalentMenuModule} from '@covalent/core';
import {CovalentSearchModule} from '@covalent/core';
import {CovalentHttpModule} from '@covalent/http';
import {CovalentMediaModule} from '@covalent/core';
import {CovalentPagingModule} from '@covalent/core';

// import {MdCardModule} from '@angular/material';
// import {MdInputModule} from '@angular/material';
// import {MdButtonModule} from '@angular/material';
// import {MdSidenavModule} from '@angular/material';
// import {MdTooltipModule} from '@angular/material';
// import {MdDialogModule} from '@angular/material';

@NgModule({
  imports: [
    // UI modules
    BrowserAnimationsModule,
    MdListModule,
    MdIconModule,
    MdMenuModule,
    MdTabsModule,
    MdToolbarModule,
    CovalentLayoutModule,
    CovalentMenuModule,
    CovalentSearchModule,
    CovalentHttpModule,
    CovalentMediaModule,
    CovalentPagingModule

    // MdCardModule,
    // MdInputModule,
    // MdButtonModule,
    // MdSidenavModule,
    // MdTooltipModule,
    // MdDialogModule,
    // CovalentMediaModule,
    // CovalentNotificationsModule,

  ],
  exports: [
    BrowserAnimationsModule,
    MdListModule,
    MdIconModule,
    MdMenuModule,
    MdTabsModule,
    MdToolbarModule,
    CovalentLayoutModule,
    CovalentMenuModule,
    CovalentSearchModule,
    CovalentHttpModule,
    CovalentMediaModule,
    CovalentPagingModule
  ]
})

export class AppCustomMaterialModule {
  constructor(mdIconRegistriy: MdIconRegistry) {
    mdIconRegistriy.registerFontClassAlias('fontawesome', 'fa');
  }
}
