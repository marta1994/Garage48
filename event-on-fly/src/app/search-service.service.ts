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

  requestedVenue: VenueFilter;

  getBundleList(): Venue[] {
   var subscription = this.db.list<Venue>("/venues").valueChanges().subscribe(venueData => {
    this.venues = venueData;
   this.bundles = this.getFuckingBundles(this.venues);
  });
  
    var getService= this.searchRequest.additionalServices.find(service => service.type == ServiceType.Venue);
    this.requestedVenue = <VenueFilter>(this.searchRequest.additionalServices.find(service => service.type == ServiceType.Venue).service);

    return this.venues;
  }

  private getFuckingBundles(venuesData) {
     var capacityMatched = this.filterByCapacity();

     var bundleData = [];

     var bundle = new Bundle();
     bundle.price = 1000;
     bundle.venue = capacityMatched[0];

     bundleData.push(bundle);
     return bundleData;
  }

  private filterByCapacity() {
    var requestedNumber = this.searchRequest.simpleFilter.peopleNumber;
    return this.venues.filter(venue => venue.peopleNumber >= requestedNumber);
  }

  private filterByPrice() {
    var priceFrom = this.requestedVenue.priceFrom;
    var priceTo = this.requestedVenue.priceTo;

    return this.venues.filter(venue => venue.price.amount < priceTo && venue.price.amount > priceFrom);
  }

  private filterBySquareSize() {
    var squareFrom = this.requestedVenue.squareFrom;
    var squareTo = this.requestedVenue.squareTo;

    return this.venues.filter(venue => venue.square < squareFrom && venue.square > squareTo);
  }
}

export enum CurrentPage {
  StartFiler = 0,
  ExtendedFilter = 1
}