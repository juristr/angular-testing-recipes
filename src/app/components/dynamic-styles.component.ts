import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `
      <div [style.background-color]="color"></div>
    `
})
export class DynamicStylesComponent {
  color = 'black';
}
