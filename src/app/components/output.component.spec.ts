/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { OutputComponent } from './output.component';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutputComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should test the emitter with a Jasmine spy', () => {
    // TODO: use Jasmine spies
    /**
     * 1. Setup a Jasmine spy on the component.greet "emit" fn
     * 2. Click the button to trigger the @Output
     * 3. Verify the emit function has actually been called with the correct value
     */
  });

  xit('should test the emitter with a simple subscribe', () => {
    // TODO: call the component.doGreet() and use an async test
    // to verify it emits the correct value
  });
});
