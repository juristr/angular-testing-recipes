import { Location } from '@angular/common';
import {
  TestBed,
  fakeAsync,
  tick,
  async,
  ComponentFixture
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppModule } from './app.module';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'routing-test-cmp',
  template: `<router-outlet></router-outlet>`
})
class RoutingTestComponent {}

describe('The App Routing (with custom cmp)', () => {
  let routingComponentFixture: ComponentFixture<RoutingTestComponent>;
  let routingComponent: RoutingTestComponent;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes)],
      declarations: [HomeComponent, SearchComponent, RoutingTestComponent]
    });

    routingComponentFixture = TestBed.createComponent(RoutingTestComponent);
    routingComponent = routingComponentFixture.componentInstance;

    router = TestBed.get(Router) as Router;
    location = TestBed.get(Location) as Location;
  });

  it('should properly redirect to home initially', async(() => {
    router.navigate(['']);
    routingComponentFixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  }));

  it(
    'should properly navigate back from search to home again',
    fakeAsync(() => {
      router.navigate(['']);
      tick();

      router.navigate(['/search']);
      tick();

      const searchCmpEl = routingComponentFixture.debugElement.query(
        By.css('app-search')
      );
      expect(searchCmpEl).not.toBeNull();
      const searchCmp = searchCmpEl.componentInstance as SearchComponent;

      searchCmp.onGoBack();
      tick();
      expect(location.path()).toBe('/home');
    })
  );
});
