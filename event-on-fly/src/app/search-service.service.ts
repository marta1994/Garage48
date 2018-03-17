import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { SearchRequest, VenueFilter, IService, AdditionalServices, ServiceType } from './search-request';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { Venue, Bundle } from './search-response';

@Injectable()
export class SearchServiceService {

  private basePath: string = '/venues';

  public searchRequest: SearchRequest = new SearchRequest();

  public bundles: Bundle[];

  public currentPage: CurrentPage = CurrentPage.StartFiler;

  venues: Venue[];

  constructor(private db: AngularFireDatabase) {
  }

  filteredVenues: any;

  requestedVenue: AdditionalServices;

  getBundleList(): Venue[] {
    var subscription = this.db.list<Venue>("/venues").valueChanges().subscribe(venueData => {
      this.venues = venueData;
      this.requestedVenue = this.searchRequest.additionalServices.find(service => service.type == ServiceType.Venue);
      this.bundles = this.getFuckingBundles(this.venues);
    });

    return this.venues;
  }

  private getFuckingBundles(venuesData) {
    var capacityMatched = this.filteredVenue(); //this.filterByCapacity();

    var bundleData = [];

    bundleData.push(this.newBundle(capacityMatched));
    return bundleData;
  }

  private newBundle(capacityMatched) {
    var bundle = new Bundle();
    bundle.price = 1000;
    bundle.venue = capacityMatched[0];

    return bundle;
  }

  private filterByCapacity() {
    var requestedNumber = this.searchRequest.simpleFilter.peopleNumber;
    return this.venues.filter(venue => venue.peopleNumber >= requestedNumber);
  }

  private filterByPrice(filteredData) {
   var reqVenue =  <VenueFilter>(this.requestedVenue.service);
    var priceFrom = reqVenue.priceFrom;
    var priceTo = reqVenue.priceTo;

    return filteredData.filter(venue => venue.price.amount < priceTo && venue.price.amount > priceFrom);
  }

  private filterBySquareSize(filteredData) {
    var reqVenue =  <VenueFilter>(this.requestedVenue.service);
    var squareFrom = reqVenue.squareFrom;
    var squareTo = reqVenue.squareTo;

    return filteredData.filter(venue => venue.square < squareFrom && venue.square > squareTo);
  }

  private filteredVenue() {
    var requestedNumber = 0;

    if (this.searchRequest.simpleFilter.peopleNumber) {
      requestedNumber = this.searchRequest.simpleFilter.peopleNumber;
    }

    var filteredData = this.venues.filter(venue => venue.peopleNumber >= requestedNumber);

    if((<VenueFilter>(this.requestedVenue.service)).squareFrom){
      this.filterBySquareSize(filteredData);
      this.filterByPrice(filteredData);
    }

    return filteredData;
  }
}

export enum CurrentPage {
  StartFiler = 0,
  ExtendedFilter = 1
}