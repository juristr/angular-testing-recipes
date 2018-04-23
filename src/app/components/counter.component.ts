import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ``
})
export class CounterComponent implements OnInit, OnDestroy {
  currentCounter = 0;
  maxCounter = 10;
  private counterInterval;

  constructor() {}

  ngOnInit() {
    this.startCounter();
  }

  private startCounter() {
    this.counterInterval = setInterval(() => {
      if (this.currentCounter >= this.maxCounter) {
        this.currentCounter = 0;
      } else {
        this.currentCounter++;
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.counterInterval) {
      clearTimeout(this.counterInterval);
    }
  }
}
