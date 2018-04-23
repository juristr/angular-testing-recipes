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
