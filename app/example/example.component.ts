import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { ExampleDialogComponent } from './example-dialog';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent implements OnInit {
  dates: Date[] = [];
  date: FormControl;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.date = new FormControl(new Date());
  }

  dateChange() {
    this.dates = [];
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      data: { dates: this.dates }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.dates = result;
        this.date.setValue(result[0]);
      }
    });
  }
}
