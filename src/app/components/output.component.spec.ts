/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test',
  template: `<button (click)="doGreet()">Do greet</button>`
})
export class OutputComponent {
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();

  doGreet() {
    this.greet.emit('Hi');
  }
}

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the emitter with a Jasmine spy', () => {
    spyOn(component.greet, 'emit');

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component.greet.emit).toHaveBeenCalledWith('Hi');
  });

  it('should test the emitter with a simple subscribe', async(() => {
    component.greet.subscribe((d) => {
      expect(d).toBe('Hi');
    });

    component.doGreet();
  }));

  it('should fire the event emitter when triggering an event', async(() => {
    component.greet.subscribe((d) => {
      expect(d).toBe('Hi');
    });

    fixture.debugElement.triggerEventHandler('greet', <Event>{});
  }));

});
