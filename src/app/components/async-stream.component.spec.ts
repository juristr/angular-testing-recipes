import { tick } from '@angular/core/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'test',
  template: `
    <div>{{ personName | async }}</div>
  `
})
class AsyncComponent {
  personName: Observable<string>;
}

describe('Async Compnent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AsyncComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly visualize the emitted values from the stream', () => {
    let stream = new Subject<string>();
    component.personName = stream.asObservable();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('div')).nativeElement.innerHTML).toBe('');

    stream.next('Hi');

    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('div')).nativeElement.innerHTML).toBe('Hi');
  });
});
