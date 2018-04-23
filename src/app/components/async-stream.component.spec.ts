/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';
import { AsyncComponent } from './async-stream.component';

describe('Async Compnent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should correctly visualize the emitted values from the stream', () => {
    // TODO
    /**
     * 1. Connect a stream to the component.personName property
     * 2. Verify that initially the template doesn't have any value
     * 3. Emit values to the stream
     * 4. Verify the values start to appear
     */
  });
});
