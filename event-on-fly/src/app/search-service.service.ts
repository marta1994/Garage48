import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { SearchRequest, VenueFilter, IService, AdditionalServices } from './search-request';
import { SearchResponse, Venue } from './search-response';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchServiceService {

  private basePath: string = '/venues';

  public searchRequest: SearchRequest = new SearchRequest();

  venues: Observable<Venue[]> = null;

  constructor(private db: AngularFireDatabase) {
  }

  /// Active filter rules
  filters = {}

  filteredVenues: any;

  requestedVenue: VenueFilter[];

  getBundleList(): Observable<Venue[]> {
    this.venues = this.db.list<Venue>(this.basePath).valueChanges();

    //  this.requestedVenue = this.searchRequest.additionalServices.filter(s => <VenueFilter>s.service, null);
     

    return this.venues;
  }

  private filterByCapacity(){
    var requestedNumber = this.searchRequest.simpleFilter.peopleNumber;
    this.filteredVenues = this.venues.map(venue => venue.filter(v => v.peopleNumber == requestedNumber));
  }

  private filterByPrice(){
    var priceRange = this.searchRequest.simpleFilter.priceRange;
    this.filteredVenues = this.venues.map(venue => venue.filter(v => v.price < && v.price > ));
  }

  private filterBySquareSize(){
    this.searchRequest.additionalServices.filter(s => (<VenueFilter>s.service).squareRange);
    
  }

  private applyFilters() {
    
  }

   /// filter property by equality to rule
   filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
  }

  /// filter  numbers greater than rule
  filterGreaterThan(property: string, rule: number) {
    this.filters[property] = val => val > rule
    this.applyFilters()
  }

  /// filter properties that resolve to true
  filterBoolean(property: string, rule: boolean) {
    if (!rule) this.removeFilter(property)
    else {
      this.filters[property] = val => val
      this.applyFilters()
    }
  }

  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }
}
