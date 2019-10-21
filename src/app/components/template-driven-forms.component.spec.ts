import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { TemplateDrivenFormsComponent, UserLogin } from "./template-driven-forms.component";


describe('Component: TemplateDrivenFormsComponent', () => {

    let component: TemplateDrivenFormsComponent;
    let fixture: ComponentFixture<TemplateDrivenFormsComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [TemplateDrivenFormsComponent]
        });

        fixture = TestBed.createComponent(TemplateDrivenFormsComponent);
        
        component = fixture.componentInstance;
        
        fixture.detectChanges();
       
    });

    it('form invalid when empty', () => {
        // The fixture.whenStable() returns a promise that resolves when the JavaScript engine's task queue becomes empty.
        fixture.whenStable().then( () => {
            expect(component.form.valid).toBeFalsy();
        });

    });

    it('form invalid when incompletely filled', () => {
        fixture.whenStable().then( () => {
            component.form.controls['email'].setValue('xyz@test.com');
            fixture.detectChanges();
            fixture.whenStable().then( () => {
                fixture.detectChanges();
                expect(component.form.valid).toBeFalsy();
                expect(component.form.controls.password.errors.required).toBeTruthy();
            });
        });

    });

    it('form valid when completely filled', () => {
        fixture.whenStable().then( () => {
            component.form.controls['email'].setValue('xyz@test.com');
            component.form.controls['password'].setValue('Qwertyui9!');
            fixture.detectChanges();
            fixture.whenStable().then( () => {
                fixture.detectChanges();
                expect(component.form.valid).toBeTruthy();
            });
        });

    });

    it('form valid & expect correct logon credentials when clicked submit', () => {
        fixture.whenStable().then( () => {
            component.form.controls['email'].setValue('xyz@test.com');
            component.form.controls['password'].setValue('Qwertyui9!');
            fixture.detectChanges();
            fixture.whenStable().then( () => {
                fixture.detectChanges();
                expect(component.form.valid).toBeTruthy();
                let user: UserLogin;
                component.login.subscribe((value) => user = value);
                component.logon();
                expect(user.email).toBe("xyz@test.com");
                expect(user.password).toBe("Qwertyui9!");
            });
        });

    });

});