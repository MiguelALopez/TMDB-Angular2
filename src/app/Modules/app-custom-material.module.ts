import {NgModule} from '@angular/core';

// Modules for UI elements
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdListModule} from '@angular/material'
import {MdIconModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {CovalentLayoutModule} from '@covalent/core';
import {CovalentMenuModule} from '@covalent/core';
import {CovalentHttpModule} from '@covalent/http';

// import {MdCardModule} from '@angular/material';
// import {MdInputModule} from '@angular/material';
// import {MdButtonModule} from '@angular/material';
// import {MdSidenavModule} from '@angular/material';
// import {MdTooltipModule} from '@angular/material';
// import {MdDialogModule} from '@angular/material';
// import {CovalentMediaModule} from '@covalent/core';

@NgModule({
  imports:[
    // UI modules
    BrowserAnimationsModule,
    MdListModule,
    MdIconModule,
    MdMenuModule,
    MdTabsModule,
    MdToolbarModule,
    CovalentLayoutModule,
    CovalentMenuModule,
    CovalentHttpModule,

    // MdCardModule,
    // MdInputModule,
    // MdButtonModule,
    // MdSidenavModule,
    // MdTooltipModule,
    // MdDialogModule,
    // CovalentMediaModule,
    // CovalentNotificationsModule,

  ],
  exports:[
    BrowserAnimationsModule,
    MdListModule,
    MdIconModule,
    MdMenuModule,
    MdTabsModule,
    MdToolbarModule,
    CovalentLayoutModule,
    CovalentMenuModule,
    CovalentHttpModule
  ]
})

export class AppCustomMaterialModule{}
