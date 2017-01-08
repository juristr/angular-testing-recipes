/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Component } from '@angular/core';

// the content projected Component
@Component({
    selector: 'my-collapsible',
    template: `
        <h1>
            <ng-content select="[title]"></ng-content>
        </h1>
        <div class="content">
            <ng-content select="[body]"></ng-content>
        </div>
    `
})
class CollapsiblePanel {}

@Component({
  selector: 'test',
  template: `
    <my-collapsible>
        <span title>I'm the title</span>
        <div body>I'm the body</div>
    </my-collapsible>
  `
})
class ContentProjectionComponent {}

describe('ContentProjectionComponent', () => {
  let component: ContentProjectionComponent;
  let fixture: ComponentFixture<ContentProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentProjectionComponent, CollapsiblePanel]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly project the title', () => {
      expect(fixture.debugElement.query(By.css('my-collapsible')).query(By.css('h1')).nativeElement.innerHTML).toContain("I'm the title");
  });

  it('should correctly project the body', () => {
      expect(fixture.debugElement.query(By.css('my-collapsible')).query(By.css('div')).nativeElement.innerHTML).toContain("I'm the body");
  });  

});
