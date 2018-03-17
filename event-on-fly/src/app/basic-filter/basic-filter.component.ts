import { Component, OnInit, Input } from "@angular/core";
import { SimpleFilter, DateRangeType, AdditionalServices } from "../search-request";

@Component({
  selector: "app-basic-filter",
  templateUrl: "./basic-filter.component.html",
  styleUrls: ["./basic-filter.component.css"]
})
export class BasicFilterComponent implements OnInit {
  public availableLocations: string[] = ["Lviv", "Odesa", "Kyiv"];

  public availableEventTypes: string[] = ["Party", "Tech", "Sports"];

  public dateOptions: [{ name: string; value: number }] = [
    { name: "Any time", value: DateRangeType.AnyDate },
    { name: "Specific date", value: DateRangeType.SpecificDate },
    { name: "Time range", value: DateRangeType.DateRange }
  ];

  private _basicFilter: SimpleFilter;
  @Input()
  set basicFilter(value: SimpleFilter) {
    this._basicFilter = value;
  }
  get basicFilter(): SimpleFilter {
    return this._basicFilter;
  }

  private _additionalServices: AdditionalServices[];
  @Input()
  set additionalServices(value: AdditionalServices[]) {
    this._additionalServices = value;
  }
  get additionalServices(): AdditionalServices[] {
    return this._additionalServices;
  }

  private _showSearch: boolean = false;
  @Input()
  set showSearch(value: boolean) {
    this._showSearch = value;
  }
  get showSearch(): boolean {
    return this._showSearch;
  }

  constructor() {}

  ngOnInit() {}

  public get dateRangeType(): DateRangeType {
    return this.basicFilter.dateRange.rangeType;
  }

  public set dateRangeType(val: DateRangeType) {
    this.basicFilter.dateRange.rangeType = val;
  }
}
