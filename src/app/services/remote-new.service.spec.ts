/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';

@Injectable()
class RemoteService {
  constructor(private http: HttpClient) {}

  fetchViaHttp(): Observable<any> {
    return this.http.get('/someendpoint/people.json');
  }
}

describe('RemoteService', () => {
  let service: RemoteService;
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RemoteService]
    });

    // inject the service
    service = TestBed.get(RemoteService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should return the json', () => {
    service.fetchViaHttp().subscribe(data => {
      expect(data.name).toBe('Juri');
    });

    const req = httpMock.expectOne('/someendpoint/people.json', 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'Juri'
    });
  });
});
