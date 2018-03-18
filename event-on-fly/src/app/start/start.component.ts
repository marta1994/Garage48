import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(public loadingService: LoadingService, public searchService: SearchServiceService) { }

  ngOnInit() {
  }

}
