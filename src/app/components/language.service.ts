import { Injectable } from '@angular/core';

export enum LanguageEnum {
  DE = 'de',
  IT = 'it',
  EN = 'en'
}

@Injectable()
export class LanguageService {
  private _currentLang = LanguageEnum.EN;

  get currentLang() {
    return this._currentLang;
  }

  setCurrentLanguage(lang: LanguageEnum) {
    this._currentLang = lang;
  }
}
