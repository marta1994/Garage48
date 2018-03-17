import { Component, OnInit, Input } from '@angular/core';
import { Venue } from '../search-response';

@Component({
  selector: 'app-bundle-item',
  templateUrl: './bundle-item.component.html',
  styleUrls: ['./bundle-item.component.css']
})
export class BundleItemComponent implements OnInit {

  constructor() { }

  private _venue: Venue;
  @Input()
  set venue(value: Venue) {
    this._venue = value;
  }
  get venue(): Venue {
    return this._venue;
  }

  ngOnInit() {
  }

}
