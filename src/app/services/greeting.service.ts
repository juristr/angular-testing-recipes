import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {
  sayHi(name: string) {
    return `Hi, ${name}`;
  }
}
