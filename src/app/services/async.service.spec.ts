/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AsyncService } from './async.service';

describe('AsyncService', () => {
  let service: AsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncService]
    });

    // inject the service
    service = TestBed.get(AsyncService);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  xit('should handle a simple async scenario', () => {
    // TODO fix this test
    service.simpleAsync().then(result => {
      expect(result).toBe('Hi therex');
    });
  });

  xit('should work with fakeAsync', () => {
    // TODO: implement this test using fakeAsync
    let value;
    service.simpleAsync().then(result => {
      value = result;
    });
    expect(value).not.toBeDefined();

    // after 50 ms
    expect(value).not.toBeDefined();

    // after 50 ms
    expect(value).toBeDefined();
  });
});
