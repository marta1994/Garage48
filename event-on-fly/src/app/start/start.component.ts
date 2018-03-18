import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { LoadingService } from '../loading.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(public loadingService: LoadingService, public searchService: SearchServiceService,
  private router: Router) { }

  ngOnInit() {
  }

  public search() {
    this.loadingService.startLoading();
    this.searchService.getBundleList();
    this.router.navigate(["search"], { skipLocationChange: false });
  }

}
