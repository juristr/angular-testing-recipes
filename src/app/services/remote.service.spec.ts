/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { RemoteService } from './remote.service';

xdescribe('RemoteService', () => {
  let service: RemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteService]
    });

    // inject the service
    service = TestBed.get(RemoteService);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should return the json', () => {
    // TODO: implement a test case
    /**
     * 1. mock the backend call
     * 2. verify it's a GET call
     */

    service.fetchViaHttp().subscribe(data => {
      expect(data.name).toBe('Juri');
    });
  });
});
