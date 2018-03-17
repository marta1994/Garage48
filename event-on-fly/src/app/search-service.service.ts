import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { SearchRequest, VenueFilter, IService, AdditionalServices, ServiceType } from './search-request';
import { SearchResponse, Venue } from './search-response';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchServiceService {

  private basePath: string = '/venues';

  public searchRequest: SearchRequest = new SearchRequest();

  venues: Observable<Venue[]> = null;

  public currentPage: CurrentPage = CurrentPage.StartFiler;

  constructor(private db: AngularFireDatabase) {
  }

  filteredVenues: any;

  requestedVenue: VenueFilter;

  getBundleList(): Observable<Venue[]> {
    this.venues =  this.db.list<Venue>(this.basePath).valueChanges();

    this.requestedVenue = <VenueFilter>(this.searchRequest.additionalServices.find(service => service.type == ServiceType.Venue).service);

    return this.venues;
  }

  private filterByCapacity() {
    var requestedNumber = this.searchRequest.simpleFilter.peopleNumber;
    this.filteredVenues = this.venues.map(venue => venue.filter(v => v.peopleNumber == requestedNumber));
  }

  private filterByPrice() {
    var priceFrom = this.requestedVenue.priceFrom;
    var priceTo = this.requestedVenue.priceTo;

    this.filteredVenues = this.venues.map(venue => venue.filter(v => v.price.amount < priceTo && v.price.amount > priceFrom));
  }

  private filterBySquareSize() {
    var squareFrom = this.requestedVenue.squareFrom;
    var squareTo = this.requestedVenue.squareTo;

    this.filteredVenues = this.venues.map(venue => venue.filter(v => v.square < squareFrom && v.square > squareTo));
  }
}

export enum CurrentPage {
  StartFiler = 0,
  ExtendedFilter = 1
}