import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <div class="container" *ngIf="isVisible">Hi there!</div>
    <button (click)="isVisible = !isVisible">toggle</button>
  `
})
export class DomTestingComponent {
  isVisible = false;
}
