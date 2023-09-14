import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  surname: string = '';
  email: string = '';
  emailAgain: string = '';
  password: string = '';
  passwordAgain: string = '';

  constructor() {}

  register(): void {
    alert('Registration successful.');
  }
}
