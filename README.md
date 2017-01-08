# Angular Testing Recipes

[![Build Status](https://travis-ci.org/juristr/angular-testing-recipes.svg?branch=master)](https://travis-ci.org/juristr/angular-testing-recipes)

> This repo is for **Angular version 2+**. [More >>](https://juristr.com/blog/2016/12/let-me-explain-angular-release-cycles/)

## Contents

_WIP: this repository is still a work in  progress_

1. [**Testing Components**](./src/app/components)
    - [testing @Input](./src/app/components/input.component.spec.ts)  
    _Learn how to a component's `@Input()`._
    - [testing @Output](./src/app/components/output.component.spec.ts)  
    _Learn how to test a component's `@Output()`, more specifically the `EventEmitter` type._
    - [testing DOM manipulations](./src/app/components/domtesting.component.spec.ts)  
    _Learn how to test the DOM manipulations which might be caused by like `*ngIf` statements etc._
    - [testing content projection](./src/app/components/content-projection.component.spec.ts)  
    _Learn how to test `<ng-content>` directives._
    - [testing dynamic CSS classes](./src/app/components/dynamic-css-classes.component.spec.ts)  
    _Test CSS classes being added and removed dynamically from your component's template based on some conditional expressions._
    - [testing dynamic CSS styles](./src/app/components/dynamic-styles.component.spec.ts)  
    _Test dynamic CSS styles using custom Jasmine matchers._
    - [mocking nested components](./src/app/components/nested.component.spec.ts)  
    _Learn how to mock out nested components which you don't want to necessarily test_
1. [**Testing Services**](./src/app/services)
    - [Simple stateless function](./app/services/greeting.service.spec.ts)  
    _Learn about different ways of injecting a service into a test case as well as how to test service methods._
    - [Async operations]('./app/services/async.service.spec.ts)  
    _Learn how to test async operations using the `async()` as well as `fakeAsync()` functions._
    - [Mocking and remote http calls]('./app/services/remote.service.spec.ts)  
    _Learn how to mock external dependencies, such as use the `MockBackend` provided by Angular to respond to http calls._

## Contribute

Wanna help? Of course! Just send me a PR :smiley:.
