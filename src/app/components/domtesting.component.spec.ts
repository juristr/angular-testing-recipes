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

  it('should not have the DOM element if boolean is set to false', () => {
    const containerElement = fixture.debugElement.query(By.css('.container'));
    expect(containerElement).toBeNull();
  });

  it('should have the DOM element if boolean is set to true', () => {
    component.isVisible = true;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const containerElement = fixture.debugElement.query(By.css('.container'));
      expect(containerElement).not.toBeNull();
    });
  });

  it('clicking the button should toggle visiblity', async(() => {
    const button = fixture.debugElement.query(By.css('button'));

    expect(fixture.debugElement.query(By.css('.container'))).toBeNull();

    button.triggerEventHandler('click', <Event>{});
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.container'))).not.toBeNull();

    button.triggerEventHandler('click', <Event>{});
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.container'))).toBeNull();
  }));
});
