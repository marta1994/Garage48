import { Component, OnInit } from '@angular/core';
import { SearchServiceService, CurrentPage } from '../search-service.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-search-action',
  templateUrl: './search-action.component.html',
  styleUrls: ['./search-action.component.css']
})
export class SearchActionComponent implements OnInit {

  constructor(private searchService: SearchServiceService, private loadingService: LoadingService) { }

  ngOnInit() {
  }

  public runSearch() {
    this.loadingService.startLoading();
    this.searchService.getBundleList();
    this.searchService.currentPage = CurrentPage.ExtendedFilter;
  }
}
