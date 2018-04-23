/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { GreetingService } from './greeting.service';

describe('GreetingService', () => {
  describe('Manually instantiating service', () => {
    let service: GreetingService;

    beforeEach(() => {
      service = new GreetingService();
    });

    afterEach(() => {
      service = null;
    });

    it('should greet properly', () => {
      expect(service.sayHi('Juri')).toBe('Hi, Juri');
    });
  });

  describe('Configuring via TestBed', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [GreetingService]
      });
    });

    describe('Injecting via testcase level inject', () => {
      it(
        'should have a service instance',
        inject([GreetingService], (service: GreetingService) => {
          expect(service).toBeDefined();
        })
      );
    });

    describe('Injecting via test suite level inject', () => {
      let service: GreetingService;

      beforeEach(
        inject([GreetingService], (s: GreetingService) => {
          service = s;
        })
      );

      it('should have a service instance', () => {
        expect(service).toBeDefined();
      });
    });

    describe('Injecting via TestBed.get()', () => {
      let service: GreetingService;

      beforeEach(() => {
        service = TestBed.get(GreetingService);
      });

      it('should have a service instance', () => {
        expect(service).toBeDefined();
      });
    });

    describe('Testing service functions', () => {
      it(
        'should greet properly',
        inject([GreetingService], (service: GreetingService) => {
          expect(service.sayHi('Juri')).toBe('Hi, Juri');
        })
      );
    });
  });
});
