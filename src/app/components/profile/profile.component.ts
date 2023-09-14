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
  newPassword: string = ''; // Add a property to store the new password
  passwordResetSuccess: string = '';
  passwordResetError: string = '';

  private showAlert(message: string, isError: boolean = false) {
    if (isError) {
      alert(`Error: ${message}`);
    } else {
      alert(message);
    }
  }

  resetPassword() {
    // Simulation of password reset with a success message
    this.passwordResetSuccess = 'Password reset successful!';

    // Reset the success message after 3 seconds
    setTimeout(() => {
      this.passwordResetSuccess = '';
    }, 3000);
    this.showAlert('Password reset successful!');
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
