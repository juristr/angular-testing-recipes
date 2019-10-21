import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[validateEmail][ngModel],[validateEmail][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useClass: EmailValidator, multi: true }
  ]
})
export class EmailValidator {

  constructor() {  }

  validate(formControl: FormControl) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    let temporaryDomains = ['yopmail.com', 'getnada.com', 'boximail.com', 'robot-mail.com', 'zetmail.com', 'givemail.com']

    const cValue = formControl.value;
    if(EMAIL_REGEXP.test(formControl.value) && temporaryDomains.indexOf(cValue.split('@')[1]) === -1 ) {
        return null;
    } else {
        return {
            validateEmail: {
                valid: false
            }
        }
    }
  }
}