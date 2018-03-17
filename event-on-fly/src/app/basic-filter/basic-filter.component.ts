import { Component, OnInit, Input } from '@angular/core';
import { SimpleFilter } from '../search-request';

@Component({
  selector: 'app-basic-filter',
  templateUrl: './basic-filter.component.html',
  styleUrls: ['./basic-filter.component.css']
})
export class BasicFilterComponent implements OnInit {

  public availableLocations: string[] = [
    "Lviv",
    "Odesa",
    "Kyiv"
  ];

  public availableEventTypes: string[] = [
    "Party",
    "Tech",
    "Sports"
  ];

private _basicFilter: SimpleFilter;
  @Input()
  set basicFilter(value: SimpleFilter) {
    this._basicFilter = value;
  }
  get basicFilter(): SimpleFilter { return this._basicFilter; }

  constructor() { }

  ngOnInit() {
  }

}
