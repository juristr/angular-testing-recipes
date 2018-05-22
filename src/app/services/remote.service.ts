import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RemoteService {
  constructor(private http: HttpClient) {}

  fetchViaHttp(): Observable<any> {
    return this.http.get('/someendpoint/people.json');
  }

  throwingError() {
    throw new Error('Should be mocked');
  }
}
