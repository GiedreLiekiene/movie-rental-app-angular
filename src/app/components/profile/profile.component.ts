import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  name = 'John';
  surname = 'Newman';
  email = 'john.newman@mail.com';

  resetPassword() {
    // Implement password reset functionality here if needed
    console.log('Password reset functionality not implemented yet.');
  }

  resetEmail() {
    const newEmail = prompt('Enter your new email:');

    if (newEmail !== null && newEmail.trim() !== '') {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(newEmail)) {
        this.email = newEmail;
      } else {
        alert('Invalid email format. Please enter a valid email.');
      }
    } else if (newEmail !== null) {
      alert('Email cannot be empty. Please enter a valid email.');
    }
  }
}
