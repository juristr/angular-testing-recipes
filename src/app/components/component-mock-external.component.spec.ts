/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WithExternalServiceComponent } from './component-mock-external.component';
import { LanguageService, LanguageEnum } from './language.service';

describe('ContentProjectionComponent', () => {
  let component: WithExternalServiceComponent;
  let langService: LanguageService;

  beforeEach(() => {
    langService = new LanguageService();
    component = new WithExternalServiceComponent(langService);
  });

  afterEach(() => {
    langService = null;
    component = null;
  });

  it('should greet in italian when the lang is IT', () => {
    langService.setCurrentLanguage(LanguageEnum.IT);
    expect(component.getGreeting()).toBe('Ciao');
  });

  it('should greet in german when the lang is DE', () => {
    spyOnProperty(langService, 'currentLang', 'get').and.returnValue(
      LanguageEnum.DE
    );
    expect(component.getGreeting()).toBe('Hallo');
  });

  it('should greet in english by default', () => {
    expect(component.getGreeting()).toBe('Hi');
  });
});
