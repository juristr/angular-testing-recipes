import { tick } from '@angular/core/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'test',
    template: `
    <div class="container" *ngIf="isVisible">Hi there!</div>
    <button (click)="isVisible = !isVisible">toggle</button>
  `
})
export class DomTestingComponent {
    isVisible: boolean = false;
}

describe('DomTestingComponent', () => {
    let component: DomTestingComponent;
    let fixture: ComponentFixture<DomTestingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DomTestingComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DomTestingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not have the DOM element if boolean is set to false', () => {
        let containerElement = fixture.debugElement.query(By.css('.container'));
        expect(containerElement).toBeNull();
    });

    it('should have the DOM element if boolean is set to true', () => {
        component.isVisible = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            let containerElement = fixture.debugElement.query(By.css('.container'));
            expect(containerElement).not.toBeNull();
        });
    });

    it('clicking the button should toggle visiblity', async(() => {
        let button = fixture.debugElement.query(By.css('button'));

        expect(fixture.debugElement.query(By.css('.container'))).toBeNull()

        button.nativeElement.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(fixture.debugElement.query(By.css('.container'))).not.toBeNull();

            button.nativeElement.click();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(fixture.debugElement.query(By.css('.container'))).toBeNull();
            });
        });

    }));

});
