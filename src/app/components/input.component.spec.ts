/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent]
    });
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
