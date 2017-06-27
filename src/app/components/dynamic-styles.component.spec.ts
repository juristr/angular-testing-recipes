/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { customMatchers, expect, NgMatchers } from '../utils/custom-matchers';

import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <div [style.background-color]="color"></div>
  `
})
class DynamicStylesComponent {
  color = 'black';
}

describe('DynamicStylesComponent', () => {
  let component: DynamicStylesComponent;
  let fixture: ComponentFixture<DynamicStylesComponent>;

  beforeEach(
    async(() => {
      jasmine.addMatchers(customMatchers);

      TestBed.configureTestingModule({
        declarations: [DynamicStylesComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly set the background style', () => {
    expect(fixture.debugElement.children[0].nativeElement).toHaveCssStyle({
      'background-color': 'black'
    });
  });
});
