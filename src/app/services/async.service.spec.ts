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

  it('should handle a simple async scenario', async(() => {
    service.simpleAsync().then(result => {
      expect(result).toBe('Hi there');
    });
  }));

  it(
    'should work with fakeAsync',
    fakeAsync(() => {
      let value;
      service.simpleAsync().then(result => {
        value = result;
      });
      expect(value).not.toBeDefined();

      tick(50);
      expect(value).not.toBeDefined();

      tick(50);
      expect(value).toBeDefined();
    })
  );
});
