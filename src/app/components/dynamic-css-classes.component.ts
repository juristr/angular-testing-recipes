import { Input, Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <div [ngClass]="{ 'alert': isAlert, 'success': !isAlert }"></div>
  `
})
export class DynamicCssClassesComponent {
  @Input() isAlert = false;
}
