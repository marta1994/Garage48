import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { SearchRequest } from '../search-request';

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

}
