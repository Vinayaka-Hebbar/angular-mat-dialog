import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly name: string = 'Angular';
  version: number = 6;

  onVersionRelease() {
    this.version += 1;
  }
}
