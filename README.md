# Angular Testing Recipes

[![Build Status](https://travis-ci.org/juristr/angular-testing-recipes.svg?branch=master)](https://travis-ci.org/juristr/angular-testing-recipes)

> This repo is for **Angular version 2+**. [More &raquo;](https://juristr.com/blog/2016/12/let-me-explain-angular-release-cycles/)

The goal of this repository is to have a collection of recipes for common testing scenarios with Angular. I'm happy for every contribution/suggestion :smiley:.

## Talk (Video + Slides)

I've been giving a talk on "Testing with Angular".

* [:notebook: Slides](https://docs.google.com/presentation/d/1gJCBr_M5dCcCX9WUM52ZUAKVlPj6hQv3MYXKlgFMpSA/edit?usp=sharing)
* [:video_camera: Talk](https://www.youtube.com/watch?v=Uw_XomCJaGQ)

## Contents

All the scenarios are listed here below and nicely linked to the source file.

1.  [**Testing Components**](./src/app/components)
    * [testing @Input](./src/app/components/input.component.spec.ts)  
      _Learn how to test a component's `@Input()`._
    * [testing @Output](./src/app/components/output.component.spec.ts)  
      _Learn how to test a component's `@Output()`, more specifically the `EventEmitter` type._
    * [testing timers inside components](./src/app/components/counter.component.spec.ts)  
      _Learn about how to handle timers inside components using `fakeAsync` and `discardPeriodicTasks()`._
    * [testing DOM manipulations](./src/app/components/domtesting.component.spec.ts)  
      _Learn how to test the DOM manipulations which might be caused by like `*ngIf` statements etc._
    * [testing content projection](./src/app/components/content-projection.component.spec.ts)  
      _Learn how to test `<ng-content>` directives._
    * [testing dynamic CSS classes](./src/app/components/dynamic-css-classes.component.spec.ts)  
      _Test CSS classes being added and removed dynamically from your component's template based on some conditional expressions._
    * [testing dynamic CSS styles](./src/app/components/dynamic-styles.component.spec.ts)  
      _Test dynamic CSS styles using custom Jasmine matchers._
    * [mocking nested components](./src/app/components/nested.component.spec.ts)  
      _Learn how to mock out nested components which you don't want to necessarily test_
    * [testing component with service deps](./src/app/components/component-mock-external.component.spec.ts)  
      _Simple test of component logic by manually instantiating the component_
1.  [**Testing Services**](./src/app/services)
    * [Simple stateless function](./src/app/services/greeting.service.spec.ts)  
      _Learn about different ways of injecting a service into a test case as well as how to test service methods._
    * [Async operations](./src/app/services/async.service.spec.ts)  
      _Learn how to test async operations using the `async()` as well as `fakeAsync()` functions._
    * [Mocking and remote http calls](./src/app/services/remote.service.spec.ts)
      _Learn how to mock external dependencies, such as use the `MockBackend` provided by Angular to respond to http calls._
    * [Mocking remote calls with Jasmine spies](./src/app/services/remote.service.fake-call.spec.ts)
      _Fake the call by using Jasmine spies._
1.  [**Testing Pipes**](./src/app/pipes)
    * [custom filter pipe](./src/app/pipes/filter.pipe.spec.ts)
    * [async pipes within templates](./src/app/components/async-stream.component.spec.ts)  
      _Shows how to correctly resolve async pipes and then verify they properly render in the HTML_
1.  [**Custom Matchers and Utilities**](./src/app/utils)
    * [Create your own custom Jasmine matchers](./src/app/utils/custom-matchers.ts)

## Articles on Testing

* [:notebook: Angular 2 Testing Guide by Gerard Sans](https://medium.com/google-developer-experts/angular-2-testing-guide-a485b6cb1ef0)
* [:notebook: Testing Angular Directives with Custom Matchers by Thoughtram](https://blog.thoughtram.io/angular/2016/12/27/angular-2-advance-testing-with-custom-matchers.html)
* [:notebook: Essential Angular Testing by Nrwl](https://blog.nrwl.io/essential-angular-testing-192315f8be9b#.undqs5icx)
* [:notebook: Three Ways to Test Angular 2 Components by Victor Savkin](https://vsavkin.com/three-ways-to-test-angular-2-components-dcea8e90bd8d#.hif9f24b5)

## Run them yourself

If you want to run the example locally,

1.  clone this repository
1.  Run `npm install`
1.  Run `npm test` to execute all the tests

By running `npm run test.watch` you can run the tests in watch mode which is particularly useful during development.

## Contribute

Wanna help? Of course! Just open an [issue](https://github.com/juristr/angular-testing-recipes/issues) and/or [send me a PR](https://github.com/juristr/angular-testing-recipes/pulls) :smiley:.

## Other Links & Resources

* [Testing Angular Material Dialog templates](http://angular-tips.com/blog/2018/02/testing-angular-material-dialog-templates/)
