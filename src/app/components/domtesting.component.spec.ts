/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DomTestingComponent } from './domtesting.component';

describe('DomTestingComponent', () => {
  let component: DomTestingComponent;
  let fixture: ComponentFixture<DomTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DomTestingComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should not have the DOM element if boolean is set to false', () => {
    // TODO: grab the .container and verify it is not visible by default
  });

  xit('should have the DOM element if boolean is set to true', () => {
    // TODO: test that when set the isVisible=true -> the .container gets visible
  });

  xit('clicking the button should toggle visiblity', async(() => {
    // TODO
    /**
     * 1. verify the .container is not
     * 2. trigger a click even on the button
     * 3. verify that the container is visible
     * 4. Click the button again
     * 5. Verify the container is hidden again
     */
  }));
});
