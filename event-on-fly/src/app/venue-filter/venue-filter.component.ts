import { Component, OnInit, Input } from '@angular/core';
import { VenueFilter, AdditionalServices } from '../search-request';
import { containerRefreshStart } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-venue-filter',
  templateUrl: './venue-filter.component.html',
  styleUrls: ['./venue-filter.component.css']
})
export class VenueFilterComponent implements OnInit {

  private _venueService: AdditionalServices
  @Input()
  set venueService(value: AdditionalServices) {
    this._venueService = value;
  }
  get venueService(): AdditionalServices { return this._venueService; }

  get venueFilter(): VenueFilter { return <VenueFilter>this._venueService.service; }

  constructor() { }

  ngOnInit() {
  }

}
