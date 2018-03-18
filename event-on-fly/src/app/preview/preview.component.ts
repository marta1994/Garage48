import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private router: Router, private loadingService: LoadingService) { }

  ngOnInit() {
  }

  public goToStart() {
    this.router.navigate(["start"], { skipLocationChange: false });
    this.loadingService.startLoading();
  }

}
