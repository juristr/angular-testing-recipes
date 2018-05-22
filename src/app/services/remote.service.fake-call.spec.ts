/* tslint:disable:no-unused-variable */

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { of } from 'rxjs/observable/of';
import { TestBed } from '@angular/core/testing';
import { RemoteService } from './remote.service';

describe('RemoteService (fake call with Jasmine)', () => {
  let service: RemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      // providers: [{ provide: RemoteService, useValue: jasmineSpy }]
      providers: [RemoteService]
    });

    // inject the service
    service = TestBed.get(RemoteService);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should return the mocked data in the subscribe', () => {
    const spy = spyOn(service, 'fetchViaHttp').and.returnValue(
      of({
        name: 'Juri'
      })
    );

    // act
    service.fetchViaHttp().subscribe(data => {
      expect(data.name).toBe('Juri');
    });

    // assert
    expect(spy).toHaveBeenCalled();
  });

  it('should not invoke the error throwing function since we mocked it', () => {
    const emptyFn = () => {};
    const spy = spyOn(service, 'throwingError').and.callFake(emptyFn);

    // act
    service.throwingError();

    // assert
    expect(spy).toHaveBeenCalled();
  });
});
