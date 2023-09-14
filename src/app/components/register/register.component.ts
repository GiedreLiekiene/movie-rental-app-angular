import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  register(): void {
    if (this.validateRegistrationForm()) {
      // redirect to the home page
      this.router.navigate(['/home']);
    }
  }

  validateRegistrationForm(): boolean {
    if (
      this.name.trim() === '' ||
      this.surname.trim() === '' ||
      this.email.trim() === '' ||
      this.emailAgain.trim() === '' ||
      this.password.trim() === '' ||
      this.passwordAgain.trim() === ''
    ) {
      return false;
    }

    if (this.email !== this.emailAgain) {
      return false;
    }

    if (this.password !== this.passwordAgain) {
      return false;
    }

    return true;
  }
}
