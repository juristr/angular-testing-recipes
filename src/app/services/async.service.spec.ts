/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, inject, tick } from '@angular/core/testing';
import { Injectable } from '@angular/core';

@Injectable()
export class AsyncService {
  simpleAsync() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hi there');
      }, 100);
    });
  }
}

describe('AsyncService', () => {
  let service:AsyncService;

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

  it('should handle a simple async scenario', async(() => {
    service.simpleAsync().then((result) => {
      expect(result).toBe('Hi there');
    });
  }));

  it('should work with fakeAsync', fakeAsync(() => {
    let value;
    service.simpleAsync().then((result) => {
      value = result;
    });
    expect(value).not.toBeDefined();

    tick(50);
    expect(value).not.toBeDefined();

    tick(50);
    expect(value).toBeDefined();
  }));

});
