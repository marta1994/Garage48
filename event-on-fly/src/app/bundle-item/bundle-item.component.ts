import { Component, OnInit, Input } from "@angular/core";
import { Bundle } from "../search-response";
import { MatDialog } from "@angular/material/dialog";
import { BookedDialogComponent } from "../booked-dialog/booked-dialog.component";
import { Router } from "@angular/router";
import { LoadingService } from "../loading.service";

@Component({
  selector: "app-bundle-item",
  templateUrl: "./bundle-item.component.html",
  styleUrls: ["./bundle-item.component.css"]
})
export class BundleItemComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router, private loadingService: LoadingService) {}

  private _bundle: Bundle;
  @Input()
  set bundle(value: Bundle) {
    this._bundle = value;
  }
  get bundle(): Bundle {
    return this._bundle;
  }

  ngOnInit() {}

  public openBookDialog() {
    let dialogRef = this.dialog.open(BookedDialogComponent, {
      width: "530px"
    });
  }

  public viewDetails() {
    this.loadingService.startLoading();
    this.router.navigate(["view-details"], { skipLocationChange: false });
  }
}
