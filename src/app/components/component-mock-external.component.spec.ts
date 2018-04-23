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
    // TODO Instantiate component & langService;
  });

  afterEach(() => {
    langService = null;
    component = null;
  });

  xit('should greet in italian when the lang is IT', () => {
    // TODO use the setCurrentLanguage(..) & test the getGreeting() function
  });

  xit('should greet in german when the lang is DE', () => {
    // TODO use a Jasmine spy to spy on the "currentLang" getter
    // Configure it s.t. it returns LanguageEnum.DE
  });

  xit('should greet in english by default', () => {
    expect(component.getGreeting()).toBe('Hi');
  });
});
