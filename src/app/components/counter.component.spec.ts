import { Component, OnInit, OnDestroy } from '@angular/core';

import {
  async,
  fakeAsync,
  ComponentFixture,
  tick,
  TestBed,
  discardPeriodicTasks
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';

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

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CounterComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  afterEach(() => {
    // destroy the component to cancel the timer again
    fixture.destroy();
  });

  it(
    'CounterComponent should count',
    fakeAsync(() => {
      // you need to call the ngOnInit explicitly, and inside the
      // fakeAsync() for the tick() to work
      component.ngOnInit();
      expect(component.currentCounter).toBe(0);

      tick(500);
      expect(component.currentCounter).toBe(0);

      // after 1000ms the counter should have increased
      tick(500);
      expect(component.currentCounter).toBe(1);

      discardPeriodicTasks();
    })
  );
});
