import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from './app-routing.module';
import { AppModule } from './app.module';

describe('The App Routing', () => {
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes(appRoutes)]
    });

    router = TestBed.get(Router) as Router;
    location = TestBed.get(Location) as Location;
  });

  it(
    'automatically redirects to home when the app starts',
    fakeAsync(() => {
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/home');
    })
  );

  it(
    'automatically redirects to search when invoking /search',
    fakeAsync(() => {
      router.navigate(['/search']);
      tick();
      expect(location.path()).toBe('/search');
    })
  );
});
