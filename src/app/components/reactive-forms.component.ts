import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";

export class User {
    constructor(public name: string, public email: string,
        public password: string, public confirmPassword: string) {
    }
}

@Component({
    selector: 'app-signup',
    template: `
  <form (ngSubmit)="signup()" [formGroup]="form">
    <label>Name</label>
    <input type="text" formControlName="name">
    <label>Email</label>
    <input type="email" formControlName="email">
    <label>Password</label>
    <input type="password" formControlName="password">
    <label>Confirm Password</label>
    <input type="password" formControlName="confirmPassword">
    <button type="submit">Sign up</button>
  </form>
  `
})
export class ReactiveFormsComponent {
    @Output() register = new EventEmitter<User>();
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20)]],
            email: ['', [
                Validators.required,
                Validators.pattern("[^ @]*@[^ @]*")]],
            password: ['', [
                Validators.required,
                Validators.minLength(8)]],
            confirmPassword: ['', [
                Validators.required,
                this.checkConfirmPassword.bind(this)]],
        });
    }

    checkConfirmPassword(control: FormControl):{[s: string]: boolean} {
        if(this.form && this.form.value.password !== control.value) {
            return { 'passwordDoesntMatch':true };
        }
        return null;
    }

    signup() {
        console.log(`Signup` + JSON.stringify(this.form.value));
        if (this.form.valid) {
            this.register.emit(
                new User(
                    this.form.value.name,
                    this.form.value.email,
                    this.form.value.password,
                    this.form.value.confirmPassword
                )
            );
        }
    }
}