import {
  ComponentFixture,
  TestBed,
  async,
  discardPeriodicTasks,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  afterEach(() => {
    // destroy the component to cancel the timer again
    fixture.destroy();
  });

  xit('CounterComponent should count', () => {
    // TODO: test that the counter counts every 1 second (hint: use fakeAsync)

    // HINT: this function is needed to discard any periodic tasks after
    // the test run, i.e. our counter timer
    discardPeriodicTasks();
  });
});
