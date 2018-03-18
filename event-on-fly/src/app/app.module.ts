import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';

import {SearchServiceService} from './search-service.service';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { BasicFilterComponent } from './basic-filter/basic-filter.component';
import { VenueFilterComponent } from './venue-filter/venue-filter.component';
import { SearchActionComponent } from './search-action/search-action.component';
import { BundleItemComponent } from './bundle-item/bundle-item.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BookedDialogComponent } from './booked-dialog/booked-dialog.component';

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
    VenueFilterComponent,
    SearchActionComponent,
    BundleItemComponent,
    TopBarComponent,
    BookedDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports: [
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [
    SearchServiceService
  ],
  entryComponents: [
    BookedDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
