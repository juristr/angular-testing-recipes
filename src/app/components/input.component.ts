import { Input, Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `{{ message }}`
})
export class InputComponent {
  @Input() message: string;
}
