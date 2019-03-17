import { Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <button (click)="doGreet()">Do greet</button>
  `
})
export class OutputComponent {
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();

  doGreet() {
    this.greet.emit('Hi');
  }
}
