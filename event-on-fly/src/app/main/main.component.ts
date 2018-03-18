import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public searchService: SearchServiceService, public loadingService: LoadingService) { }

  ngOnInit() {
  }

}
