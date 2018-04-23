import { Component } from '@angular/core';

@Component({
  selector: 'my-collapsible',
  template: `
    <h1>
        <ng-content select="[title]"></ng-content>
    </h1>
    <div class="content">
        <ng-content select="[body]"></ng-content>
    </div>
  `
})
export class CollapsiblePanelComponent {}
