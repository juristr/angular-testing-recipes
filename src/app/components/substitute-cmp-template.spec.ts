/* tslint:disable:no-unused-variable */
import {
  async,
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input, DebugElement, Injectable } from '@angular/core';

@Injectable()
class MessageService {
  getMessage() {
    return 'hi';
  }
}

@Component({
  selector: 'display-message',
  template: ''
})
class MessageComponent {
  public message: string = '';

  constructor(private messageService: MessageService) {
    this.message = messageService.getMessage();
  }

  setMessage(newMessage: string) {
    this.message = newMessage;
  }
}

describe('MessageComponent', () => {
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageComponent],
      providers: [MessageService]
    });

    fixture = createGenericTestComponent<MessageComponent>(
      MessageComponent,
      '<span *ngIf="message">{{message}}</span>'
    );

    // const messageService = TestBed.get(MessageService) as MessageService;
    // spyOn(messageService, 'getMessage').and.returnValue('Ciao');

    fixture.detectChanges();
  });

  it('should set the message', async(() => {
    fixture.componentInstance.setMessage('Test message');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').innerText).toEqual('Test message');
  }));
});

/**
 * Allows to create a test component on the fly within a test case.
 * 
 * ```typescript
 *  fixtureTestComponent = createGenericTestComponent(
      `
      <form [formGroup]="testForm">
          <input type="text" formControlName="currency" r3uiNumberFormat>
      </form>
      `,
      TestComponent
    );
 * ```
 * 
 * **Note**, you don't have to invoke the `.compileComponents()` on the 
 * `TestBed.configureTestingModule(..)` setup.
 * 
 * @param html 
 * @param type 
 */
export function createGenericTestComponent<T>(
  type: { new (...args: any[]): T },
  html: string
): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}
