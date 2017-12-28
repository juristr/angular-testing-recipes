import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

/*
* Example Use case
* When we want to create a tightly coupled components which is always supposed to
* be inside another component. Also when we don't want to pass some thing as input for
* multiple child component. We can pass it to parent component once and child component can
* get parent instance and access the values of parent.
*
* <app-form-error-container [control]="control">
*     <app-form-error [type]="required">This field is required</app-form-error>
*     <app-form-error [type]="minlength">This field should have a minimum of 10 characters</app-form-error>
* </app-form-error-container>
*
* In the above example we can pass the control to container once and all child will access it
* and do a check to make it self visible or not.
*/

@Component({
    selector: 'app-parent',
    template: `
        <div>
            <span>{{value}}</span>
            <ng-content></ng-content>
        </div>`
})
export class ParentComponent {
    value = 'parent';
}

@Component({
    selector: 'app-child',
    template: `
        <div>{{parent.value}}</div>`
})
export class ChildComponent {
    parent: ParentComponent;

    constructor(private parentComponent: ParentComponent) {
        this.parent = parentComponent;
    }
}

describe('NestedComponentWithInjectedParentTesting', () => {
    let component: ChildComponent;
    let fixture: ComponentFixture<ChildComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ParentComponent, ChildComponent],
            providers: [ParentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChildComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have parent with value parent', function () {
        expect(component.parent.value).toBe('parent');
    });

    it('should data bind parent value', function () {
        expect(fixture.debugElement.query(By.css('div')).nativeElement.innerText).toBe('parent');
    });
});
