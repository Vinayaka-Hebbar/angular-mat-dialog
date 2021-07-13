import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCommonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';

import { ExampleComponent } from './example.component';
import { ExampleDialogModule } from './example-dialog';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ExampleComponent],
  exports: [ExampleComponent],
  imports: [
    BrowserModule,
    ExampleDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ExampleModule {}
