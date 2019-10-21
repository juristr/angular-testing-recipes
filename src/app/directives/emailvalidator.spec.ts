import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { ViewChild, Component } from '@angular/core';
import { EmailValidator } from './emailvalidator.directive';

@Component({
    template: `
    <form #f="ngForm">
        <label>Email</label>
        <input type="email" name="email" [(ngModel)]="model.email" required validateEmail>
        <label>Password</label>
        <input type="password" name="password" [(ngModel)]="model.password" required>
        <button type="submit">Log in</button>
    </form>
    `
})
class TestTemplateDrivenFormsComponent {
    @ViewChild('f') form: any;
    model = {
        email: '',
        password: ''
    };
    constructor() { }
    ngOnInit() { }
}

describe('Directive: EmailValidator using TestTemplateDrivenFormsComponent', () => {

    let component: TestTemplateDrivenFormsComponent;
    let fixture: ComponentFixture<TestTemplateDrivenFormsComponent>;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [TestTemplateDrivenFormsComponent, EmailValidator]
        });

        fixture = TestBed.createComponent(TestTemplateDrivenFormsComponent);
        
        component = fixture.componentInstance;
        
        fixture.detectChanges();
       
    });

    it('Email invalid when not filled', () => {
        fixture.whenStable().then( () => {
            fixture.detectChanges();
            expect(component.form.valid).toBeFalsy();
            expect(component.form.controls.email.errors.required).toBeTruthy();
        });
    });

    it('Email invalid when used wrong domain', () => {
        fixture.whenStable().then( () => {
            component.form.controls['email'].setValue('xyzqw@yopmail.com');
            fixture.detectChanges();
            fixture.whenStable().then( () => {
                fixture.detectChanges();
                expect(component.form.controls.email.errors.required).toBeFalsy();
                expect(component.form.controls.email.errors.validateEmail).toBeTruthy();
            });
        });
    });

    it('form valid when completely filled', () => {
        fixture.whenStable().then( () => {
            component.form.controls['email'].setValue('xyzqw@gmail.com');
            component.form.controls['password'].setValue('Qwertyui9!');
            fixture.detectChanges();
            fixture.whenStable().then( () => {
                fixture.detectChanges();
                expect(component.form.valid).toBeTruthy();
            });
        });
    });
});
