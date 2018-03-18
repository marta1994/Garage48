import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-booked-dialog',
  templateUrl: './booked-dialog.component.html',
  styleUrls: ['./booked-dialog.component.css']
})
export class BookedDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BookedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
