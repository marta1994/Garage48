import { Component, OnInit } from '@angular/core';
import { SearchServiceService, CurrentPage } from '../search-service.service';

@Component({
  selector: 'app-search-action',
  templateUrl: './search-action.component.html',
  styleUrls: ['./search-action.component.css']
})
export class SearchActionComponent implements OnInit {

  constructor(private searchService: SearchServiceService) { }

  ngOnInit() {
  }

  public runSearch() {
    this.searchService.getBundleList();
    this.searchService.currentPage = CurrentPage.ExtendedFilter;
  }
}
