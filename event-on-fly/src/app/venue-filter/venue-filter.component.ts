import { Component, OnInit, Input } from '@angular/core';
import { VenueFilter } from '../search-request';
import { containerRefreshStart } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-venue-filter',
  templateUrl: './venue-filter.component.html',
  styleUrls: ['./venue-filter.component.css']
})
export class VenueFilterComponent implements OnInit {

  private _venueFilter: VenueFilter;

  @Input()
  set venueFilter(value: VenueFilter) {
    this._venueFilter = value;
  }
  get venueFilter(): VenueFilter { return this._venueFilter; }

  constructor() { }

  ngOnInit() {
  }

}
