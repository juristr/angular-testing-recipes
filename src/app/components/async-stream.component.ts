import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'test',
  template: `
      <div>{{ personName | async }}</div>
    `
})
export class AsyncComponent {
  personName: Observable<string>;
}
