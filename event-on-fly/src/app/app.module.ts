import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { BasicFilterComponent } from './basic-filter/basic-filter.component';
import { VenueFilterComponent } from './venue-filter/venue-filter.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDFey1JYAWe874FyVKIZ5b-IzqZjm9zBSU",
  authDomain: "event-on-fly.firebaseapp.com",
  databaseURL: "https://event-on-fly.firebaseio.com",
  projectId: "event-on-fly"
};

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    BasicFilterComponent,
    VenueFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSelectModule
  ],
  exports: [
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
