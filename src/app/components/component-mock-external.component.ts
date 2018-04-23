import { LanguageService, LanguageEnum } from './language.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting-component',
  template: `
        {{ getGreeting() }}!
    `
})
export class WithExternalServiceComponent {
  constructor(private langService: LanguageService) {}

  getGreeting() {
    if (this.langService.currentLang === LanguageEnum.DE) {
      return 'Hallo';
    } else if (this.langService.currentLang === LanguageEnum.IT) {
      return 'Ciao';
    } else {
      return 'Hi';
    }
  }
}
