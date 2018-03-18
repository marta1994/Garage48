import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(public searchService: SearchServiceService) { }

  ngOnInit() {
  }

}
