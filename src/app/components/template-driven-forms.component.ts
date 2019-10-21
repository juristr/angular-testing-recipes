import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

export class UserLogin {
    constructor(public email: string, public password: string) {
    }
}

@Component({
    selector: 'app-login',
    template: `
  <form (ngSubmit)="logon()" #f="ngForm">
    <label>Email</label>
    <input type="email" name="email" [(ngModel)]="model.email" required pattern="[^ @]*@[^ @]*">
    <label>Password</label>
    <input type="password" name="password" [(ngModel)]="model.password" required minlength="8">
    <button type="submit">Sign up</button>
  </form>
  `
})
export class TemplateDrivenFormsComponent {
    @Output() login = new EventEmitter<UserLogin>();
    @ViewChild('f') form: any;
    model: UserLogin = {
        email: '',
        password: ''
    };

    constructor() { }

    ngOnInit() { }

    logon() {
        console.log(`Logon` + JSON.stringify(this.model));
        if (this.form.valid) {
            this.login.emit(
                new UserLogin(
                    this.form.value.email,
                    this.form.value.password
                )
            );
        }
    }
}