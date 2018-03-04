/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';

@Injectable()
class RemoteService {
  constructor(private http: HttpClient) {}

  fetchViaHttp(): Observable<any> {
    return this.http.get('/someendpoint/people.json');
  }
  
  fetchViaHttpWithParams(params: any) {
    // remove empty/undefined/null props
    if (params) {
      params = Object.entries(filter)
        .filter(([k, v]) => v != null && v !== '')
        .reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});
    }
    
    return this.http.get('/someendpoint/people.json', { params: new HttpParams({ fromObject: params });
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
      
  it('should add HTTP params', () => {
    service.fetchViaHttpWithParams({ name: 'Juri' }).subscribe();
    const req = httpTestingController.expectOne(req => req.params.has('name'));

    req.flush({});
  });

  it('should remove null/undefined/empty values from HTTP params', () => {
    service
      .fetchViaHttpWithParams({ name: 'Juri', age: null, street: undefined, location: '' })
      .subscribe();
    const req = httpTestingController.expectOne(req =>
      req.url.includes('people')
    );
    expect(req.request.params.has('name')).toBeTruthy();
    expect(req.request.params.has('age')).toBeFalsy();
    expect(req.request.params.has('street')).toBeFalsy();
    expect(req.request.params.has('location')).toBeFalsy();

    req.flush({});
  });
      
});
