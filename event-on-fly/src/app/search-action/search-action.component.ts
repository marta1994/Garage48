import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SearchServiceService, CurrentPage } from '../search-service.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-search-action',
  templateUrl: './search-action.component.html',
  styleUrls: ['./search-action.component.css']
})
export class SearchActionComponent implements OnInit {

  constructor(private searchService: SearchServiceService, 
    private loadingService: LoadingService, private router: Router) { }

  ngOnInit() {
  }

  public runSearch() {
    this.loadingService.startLoading();
    this.searchService.getBundleList();
    this.router.navigate(["search"], { skipLocationChange: false }).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
