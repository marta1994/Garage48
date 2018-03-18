import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { SearchRequest, VenueFilter, IService, AdditionalServices, ServiceType, DateRangeType } from './search-request';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { Venue, Bundle, Catering } from './search-response';
import { PriceResult } from './price-calculation';

@Injectable()
export class SearchServiceService {

  private basePath: string = '/venues';

  public searchRequest: SearchRequest = new SearchRequest();

  public bundles: Bundle[];

  public currentPage: CurrentPage = CurrentPage.StartFiler;

  venues: Venue[];
  caterings: Catering[];

  constructor(private db: AngularFireDatabase) {
  }

  filteredVenues: any;

  requestedVenue: AdditionalServices;

  getBundleList(): Venue[] {
    var subscription = this.db.list<Venue>("/venues").valueChanges().subscribe(venueData => {
      this.venues = venueData;
      this.caterings = [];
      this.requestedVenue = this.searchRequest.additionalServices.find(service => service.type == ServiceType.Venue);
      this.bundles = this.getFuckingBundles(this.venues, this.caterings);
    });

    return this.venues;
  }

  //#region budles creation

  private getFuckingBundles(venuesData, cateringData) {

    var matchedVenue = this.filteredVenue();
    var matchedCatering = this.filteredCatering();

    var bundleData = [];

    for (var index = 0; index < matchedVenue.length; index++) {
      matchedVenue[index].useIt = true;
      bundleData.push(this.newBundle(matchedVenue, matchedCatering, index));
    }

    return bundleData;
  }

  private newBundle(matchedVenue, matchedCatering, index) {
    var bundle = new Bundle();

    bundle.catering = matchedCatering[0];
    bundle.venue = matchedVenue[index];

    var prices = [];
    prices.push(bundle.venue.price.amount);
    prices.push(bundle.catering.price);
    bundle.price = new PriceResult(prices).Calculate();

    return bundle;
  }

  //#endregion

  //#region venue filters

  private filterByCapacity() {
    var requestedNumber = this.searchRequest.simpleFilter.peopleNumber;
    return this.venues.filter(venue => venue.peopleNumber >= requestedNumber);
  }

  private filterByPrice(filteredData) {
    var reqVenue = <VenueFilter>(this.requestedVenue.service);

    var priceFrom = 0;
    var priceTo = 1000000;

    if (reqVenue.priceFrom) {
      priceFrom = reqVenue.priceFrom;
    }

    if (reqVenue.priceTo) {
      priceTo = reqVenue.priceTo;
    }

    return filteredData.filter(venue => venue.price.amount < priceTo && venue.price.amount > priceFrom);
  }

  private filterBySquareSize(filteredData) {
    var reqVenue = <VenueFilter>(this.requestedVenue.service);
    var squareFrom = 0;
    var squareTo = 10000000;

    if (reqVenue.squareFrom) {
      squareFrom = reqVenue.squareFrom;
    }

    if (reqVenue.squareTo) {
      squareTo = reqVenue.squareTo;
    }

    return filteredData.filter(venue => venue.square < squareTo && venue.square > squareFrom);
  }

  private filterByDate(filteredData) {
    if (this.searchRequest.simpleFilter.dateRange.rangeType == DateRangeType.SpecificDate) {
      var requestedDate = this.searchRequest.simpleFilter.dateRange.fromDate;

      if (requestedDate == undefined) {
        requestedDate = new Date('3/18/2018');
      }

      var bookedVenues = this.getBookedVenues(filteredData, requestedDate.toLocaleDateString());
      filteredData = filteredData.filter(v => this.compareVenues(bookedVenues, v).length != 0);
    }

    return filteredData;
  }

  private getBookedVenues(filteredData, requestedDate) {
    var bookedVenues = filteredData.filter(v => this.compareDate(v.bookedDates, requestedDate).length != 0);
    return bookedVenues;
  }

  private compareDate(bookedDates, requestedDate) {
    var dates = [];
    if (bookedDates != undefined) {
      dates = bookedDates.filter(bookedDate => bookedDate == requestedDate);
    }

    return dates;
  }

  private compareVenues(bookedVenues, venue) {
    var filtered = bookedVenues.filter(bv => bv != venue);
    return filtered;
  }

  //#endregion

  private filteredVenue() {
    var requestedNumber = 0;

    if (this.searchRequest.simpleFilter.peopleNumber) {
      requestedNumber = this.searchRequest.simpleFilter.peopleNumber;
    }

    var filteredData = this.venues.filter(venue => venue.peopleNumber >= requestedNumber);
    filteredData = this.filterByDate(filteredData);

    if ((<VenueFilter>(this.requestedVenue.service))) {
      filteredData = this.filterBySquareSize(filteredData);
      filteredData = this.filterByPrice(filteredData);
    }

    return filteredData;
  }

  private filteredCatering() {
    var cateringData = [];
    var catering = new Catering();
    catering.name = 'Delicateka';
    catering.image = 'https://static1.squarespace.com/static/5319e7a7e4b0ee73efefb8ed/t/538fd617e4b06d663cf6e8b1/1434558163094/Catering+copy.jpg?format=1500w';
    catering.price = 300;
    catering.providedWifi = true;

    cateringData.push(catering);
    return cateringData;
  }
}

export enum CurrentPage {
  StartFiler = 0,
  ExtendedFilter = 1
}