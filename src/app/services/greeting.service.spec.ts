/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { GreetingService } from './greeting.service';

describe('GreetingService', () => {
  xdescribe('Manually instantiating service', () => {
    let service: GreetingService;

    beforeEach(() => {
      // TODO: create service instance
    });

    afterEach(() => {});

    it('should greet properly', () => {
      // TODO: test the service.sayHi(...) function
    });
  });

  describe('Configuring via TestBed', () => {
    beforeEach(() => {
      // TODO configure the service via the TestBed
    });

    xdescribe('Injecting via testcase level inject', () => {
      it('should have a service instance', () => {
        // TODO: inject the service directly in this "it(..)"
        // function and uncomment the code below:
        // expect(service).toBeDefined();
      });
    });

    xdescribe('Injecting via test suite level inject', () => {
      let service: GreetingService;

      beforeEach(() => {
        // TODO: inject the service instance into the beforeEach
        // to make the test run properly
      });

      it('should have a service instance', () => {
        expect(service).toBeDefined();
      });
    });

    xdescribe('Injecting via TestBed.get()', () => {
      let service: GreetingService;

      beforeEach(() => {
        service = TestBed.get(GreetingService);
      });

      it('should have a service instance', () => {
        expect(service).toBeDefined();
      });
    });
  });
});
