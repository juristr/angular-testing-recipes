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

  it('should test the emitter with a Jasmine spy', () => {
    spyOn(component.greet, 'emit');

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component.greet.emit).toHaveBeenCalledWith('Hi');
  });

  it('should test the emitter with a simple subscribe', async(() => {
    component.greet.subscribe(d => {
      expect(d).toBe('Hi');
    });

    component.doGreet();
  }));

  it('should fire the event emitter when triggering an event', async(() => {
    component.greet.subscribe(d => {
      expect(d).toBe('Hi');
    });

    fixture.debugElement.triggerEventHandler('greet', <Event>{});
  }));
});
