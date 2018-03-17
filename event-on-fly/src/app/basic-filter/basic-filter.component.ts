import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-filter',
  templateUrl: './basic-filter.component.html',
  styleUrls: ['./basic-filter.component.css']
})
export class BasicFilterComponent implements OnInit {

  public availableLocations: string[] = [
    "Lviv",
    "Odesa",
    "Kyiv"
  ]

  public location: string;

  constructor() { }

  ngOnInit() {
  }

}
