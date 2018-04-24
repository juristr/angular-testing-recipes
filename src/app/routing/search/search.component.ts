import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  template: `
    search component

    <button (click)="onGoBack()">Go back</button>
  `
})
export class SearchComponent {
  constructor(private location: Location) {}

  onGoBack() {
    this.location.back();
  }
}
