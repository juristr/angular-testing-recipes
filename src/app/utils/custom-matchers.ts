/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// See: https://github.com/angular/flex-layout/blob/master/src/lib/utils/testing/custom-matchers.ts

import {__platform_browser_private__} from '@angular/platform-browser';

declare var global: any;

const getDOM = __platform_browser_private__.getDOM;
const _global = <any>(typeof window === 'undefined' ? global : window);

export const expect: (actual: any) => NgMatchers = <any> _global.expect;

/**
 * Jasmine matchers that support checking custom CSS conditions.
 * !! important to add your custom matcher to the interface
 */
export interface NgMatchers extends jasmine.Matchers {
    toHaveCssStyle(expected: { [k: string]: string } | string): boolean;
    not: NgMatchers;
}

/**
 * Implementation of 1...n custom matchers
 */
export const customMatchers: jasmine.CustomMatcherFactories = {
    // Here is our custom matcher; cloned from @angular/core
    toHaveCssStyle: function () {
        return {
            compare: function (actual: any, styles: { [k: string]: string } | string) {
                let allPassed: boolean;
                if (typeof styles === 'string') {
                    allPassed = getDOM().hasStyle(actual, styles);
                } else {
                    allPassed = Object.keys(styles).length !== 0;
                    Object.keys(styles).forEach(prop => {
                        allPassed = allPassed && getDOM().hasStyle(actual, prop, styles[prop]);
                    });
                }

                return {
                    pass: allPassed,
                    get message() {
                        const expectedValueStr = typeof styles === 'string' ? styles : JSON.stringify(styles);
                        return `Expected ${actual.outerHTML} ${!allPassed ? ' ' : 'not '}to contain the
                      CSS ${typeof styles === 'string' ? 'property' : 'styles'} "${expectedValueStr}"`;
                    }
                };
            }
        };
    }

};