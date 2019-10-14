import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ReactiveFormsComponent, User } from "./reactive-forms.component";


describe('Component: ReactiveForms', () => {

    let component: ReactiveFormsComponent;
    let fixture: ComponentFixture<ReactiveFormsComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            declarations: [ReactiveFormsComponent]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(ReactiveFormsComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
        component.ngOnInit();
    });

    it('form invalid when empty', () => {
        expect(component.form.valid).toBeFalsy();
    });

    it('name field validity', () => {
        let errors = {};
        let name = component.form.controls['name'];
        expect(name.valid).toBeFalsy();

        errors = name.errors || {};
        expect(errors['required']).toBeTruthy();

        name.setValue("Jo");
        errors = name.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeTruthy();

        name.setValue("John qwerty asdfgh zxcvbnm Doe");
        errors = name.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeFalsy();
        expect(errors['maxlength']).toBeTruthy();

        name.setValue("John Doe");
        errors = name.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeFalsy();
        expect(errors['maxlength']).toBeFalsy();
    });

    it('email field validity', () => {
        let errors = {};
        let email = component.form.controls['email'];
        expect(email.valid).toBeFalsy();

        errors = email.errors || {};
        expect(errors['required']).toBeTruthy();

        email.setValue("test");
        errors = email.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['pattern']).toBeTruthy();

        email.setValue("test@example.com");
        errors = email.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['pattern']).toBeFalsy();
    });

    it('password field validity', () => {
        let errors = {};
        let password = component.form.controls['password'];

        errors = password.errors || {};
        expect(errors['required']).toBeTruthy();

        password.setValue("Qwerty");
        errors = password.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeTruthy();

        password.setValue("Qwertyui9!");
        errors = password.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeFalsy();
    });

    it('confirm password field validity', () => {
        let passwordErrors = {};
        let confirmPasswordErrors = {};
        let password = component.form.controls['password'];
        let confirmPassword = component.form.controls['confirmPassword'];

        password.setValue("Qwertyui9!");
        passwordErrors = password.errors || {};
        confirmPasswordErrors = confirmPassword.errors || {};
        expect(passwordErrors['required']).toBeFalsy();
        expect(confirmPasswordErrors['required']).toBeTruthy();

        password.setValue("Qwertyui9!");
        confirmPassword.setValue("Qwertyui");
        confirmPasswordErrors = confirmPassword.errors || {};
        expect(confirmPasswordErrors['required']).toBeFalsy();
        expect(confirmPasswordErrors['passwordDoesntMatch']).toBeTruthy();

        password.setValue("Qwertyui9!");
        confirmPassword.setValue("Qwertyui9!");
        confirmPasswordErrors = confirmPassword.errors || {};
        expect(confirmPasswordErrors['required']).toBeFalsy();
        expect(confirmPasswordErrors['passwordDoesntMatch']).toBeFalsy();

    });

    it('submitting a form emits a user', () => {
        expect(component.form.valid).toBeFalsy();
        component.form.controls['name'].setValue("John Doe");
        component.form.controls['email'].setValue("xyz@test.com");
        component.form.controls['password'].setValue("Qwertyui9!");
        component.form.controls['confirmPassword'].setValue("Qwertyui9!");
        expect(component.form.valid).toBeTruthy();

        let user: User;
        component.register.subscribe((value) => user = value);

        // Trigger the signup function
        component.signup();

        // Testing the emitted value is correct
        expect(user.name).toBe("John Doe");
        expect(user.email).toBe("xyz@test.com");
        expect(user.password).toBe("Qwertyui9!");
        expect(user.confirmPassword).toBe("Qwertyui9!");
    });
});