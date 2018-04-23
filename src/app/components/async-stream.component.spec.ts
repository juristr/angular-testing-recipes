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

  it('should correctly visualize the emitted values from the stream', () => {
    const stream = new Subject<string>();
    component.personName = stream.asObservable();
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('div')).nativeElement.innerHTML
    ).toBe('');

    stream.next('Hi');

    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('div')).nativeElement.innerHTML
    ).toBe('Hi');
  });
});
