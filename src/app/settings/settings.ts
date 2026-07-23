import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss']
})
export class SettingsComponent {

  profile = {
    name: 'Ram',
    email: 'ram@example.com',
    mobile: '9876543210'
  };

  password = {
    current: '',
    new: '',
    confirm: ''
  };

  darkMode = false;

  updateProfile() {
    alert('Profile Updated Successfully');
  }

  changePassword() {
    if (this.password.new !== this.password.confirm) {
      alert('Passwords do not match');
      return;
    }

    alert('Password Changed Successfully');

    this.password = {
      current: '',
      new: '',
      confirm: ''
    };
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}