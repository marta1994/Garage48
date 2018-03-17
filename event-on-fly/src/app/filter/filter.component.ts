import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { SearchRequest, ServiceType } from '../search-request';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(public searchService: SearchServiceService) { }

  public get filter(): SearchRequest {
    return this.searchService.searchRequest;
  }

  ngOnInit() {
  }

  public getAdditionalFilter(type: ServiceType): any {
    return this.filter.additionalServices.filter(it =>
    it.type === type)[0];
  }

  public runSearch() {
    this.searchService.getBundleList();
  }
}
