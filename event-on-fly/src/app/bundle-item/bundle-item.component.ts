import { Component, OnInit, Input } from '@angular/core';
import { Bundle } from '../search-response';

@Component({
  selector: 'app-bundle-item',
  templateUrl: './bundle-item.component.html',
  styleUrls: ['./bundle-item.component.css']
})
export class BundleItemComponent implements OnInit {

  constructor() { }

  private _bundle: Bundle;
  @Input()
  set bundle(value: Bundle) {
    this._bundle = value;
  }
  get bundle(): Bundle {
    return this._bundle;
  }

  ngOnInit() {
  }

  public viewDetails() {
    
  }

}
