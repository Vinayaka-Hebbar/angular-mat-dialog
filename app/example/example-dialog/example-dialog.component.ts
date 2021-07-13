import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-example-dialog',
  templateUrl: 'example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss']
})
export class ExampleDialogComponent implements OnInit {
  dateForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    const formDates: FormControl[] = [];
    for (let i = 0; i < 5; i++) {
      formDates.push(new FormControl('', Validators.required));
    }
    const dates: Date[] = this.data.dates;
    if (dates) {
      dates.forEach((d, i) => {
        formDates[i].setValue(d);
      });
    }
    this.dateForm = new FormGroup({
      dates: new FormArray(formDates)
    });
  }

  deleteDate(date: FormControl, index: number) {
    date.patchValue('');
  }

  get dates(): FormArray {
    return this.dateForm.get('dates') as FormArray;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    const dates = this.dateForm.get('dates') as FormArray;
    const result = [];
    dates.controls.forEach(control => {
      if (control.valid) {
        result.push(control.value);
      }
    });
    this.dialogRef.close(result);
  }
}
