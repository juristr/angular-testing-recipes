/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';

@Injectable()
class GreetingService {
  sayHi(name: string) {
    return `Hi, ${name}`;
  }
}

describe('GreetingService', () => {

  describe('Injecting via testcase level inject', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [GreetingService]
      });
    });

    it('should have a service instance', inject([GreetingService], (service: GreetingService) => {
      expect(service).toBeDefined();
    }));

  });

  describe('Injecting via test suite level inject', () => {
    let service: GreetingService;

    beforeEach(() => TestBed.configureTestingModule({
      providers: [GreetingService]
    }));

    beforeEach(inject([GreetingService], (s: GreetingService) => {
      service = s;
    });

    it('should have a service instance', () => {
      expect(service).toBeDefined();
    });

  });


  describe('Injecting via TestBed.get()', () => {
    let service: GreetingService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [GreetingService]
      });

      service = TestBed.get(GreetingService);
    });

    it('should have a service instance', () => {
      expect(service).toBeDefined();
    });

  });

  describe('Testing service functions', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [GreetingService]
      });
    });

    it('should greet properly', inject([GreetingService], (service: GreetingService) => {
      expect(service.sayHi('Juri')).toBe('Hi, Juri');
    }));
  });
});
