import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

@Component({
  selector: 'my-collapsible-panel',
  template: ''
})
class CollapsiblePanel {}

@Component({
  selector: 'test',
  template: `
        <my-collapsible-panel></my-collapsible-panel>
  `
})
class NestedComponentTesting {}

describe('NestedComponentTesting', () => {
  xdescribe('Mocking all nested components', () => {
    let component: NestedComponentTesting;
    let fixture: ComponentFixture<NestedComponentTesting>;

    beforeEach(async(() => {
      // TODO:
      /**
       * 1. create a stub component for `<my-collapsible-panel>` component
       * 2. configure the TestBed to use the stub component
       */
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NestedComponentTesting);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  xdescribe('Ignoring nested components', () => {
    let component: NestedComponentTesting;
    let fixture: ComponentFixture<NestedComponentTesting>;

    beforeEach(async(() => {
      // TODO: configure the TestBed to ignore all unknown custom elements
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NestedComponentTesting);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
