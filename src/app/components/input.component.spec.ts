/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'test',
  template: `{{ message }}`
})
export class InputComponent {
  @Input() message: string;
}

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should correctly render the passed @Input value', () => {
    // there shouldn't be any value initially
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('');
    
    // let's set the @Input value and then verify again
    component.message = 'Hi there';

    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('Hi there');
  });

});
