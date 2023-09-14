import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    const email = this.email.trim();
    const password = this.password.trim();

    if (email === '' || password === '') {
      alert('Both email and password fields are required.');
      return;
    }

    // Simulation of successful login
    this.router.navigate(['/home']);
  }
}
