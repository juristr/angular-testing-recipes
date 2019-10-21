import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { UpdateOnHoverDirective } from './updateonhover.directive';

@Component({
    template: 
    `<button id="button1" type="text" hover>Click</button>
    <button id="button2" type="text" hover defaultColor="yellow">Click</button>`
})
class TestHoverComponent {
}


describe('Directive: Hover', () => {

    let component: TestHoverComponent;
    let fixture: ComponentFixture<TestHoverComponent>;
    let element1: DebugElement;
    let element2: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHoverComponent, UpdateOnHoverDirective]
        });
        fixture = TestBed.createComponent(TestHoverComponent);
        component = fixture.componentInstance;
        element1 = fixture.debugElement.query(By.css('#button1'));
        element2 = fixture.debugElement.query(By.css('#button2'));
        fixture.detectChanges();
    });

    it('hovering over button 1', () => {
        element1.triggerEventHandler('mouseover', null);
        fixture.detectChanges();
        expect(element1.nativeElement.style.backgroundColor).toBe('green');

        element1.triggerEventHandler('mouseout', null);
        fixture.detectChanges();
        expect(element1.nativeElement.style.backgroundColor).toBe('blue');
    });

    it('hovering over button 2', () => {
        element2.triggerEventHandler('mouseover', null);
        fixture.detectChanges();
        expect(element2.nativeElement.style.backgroundColor).toBe('green');

        element2.triggerEventHandler('mouseout', null);
        fixture.detectChanges();
        expect(element2.nativeElement.style.backgroundColor).toBe('yellow');
    });
});