import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrls: ['./users.scss']
})
export class UsersComponent {

  searchText = '';
  selectedRole = '';

  newUser: User = {
    id: 0,
    name: '',
    email: '',
    role: ''
  };

  users: User[] = [
    { id: 1, name: 'Ram', email: 'ram@gmail.com', role: 'Admin' },
    { id: 2, name: 'Kiran', email: 'kiran@gmail.com', role: 'Editor' },
    { id: 3, name: 'Ravi', email: 'ravi@gmail.com', role: 'Viewer' }
  ];

  editIndex: number | null = null;

  get filteredUsers(): User[] {
    return this.users.filter(user => {

      const searchMatch =
        user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchText.toLowerCase());

      const roleMatch =
        this.selectedRole === '' ||
        user.role === this.selectedRole;

      return searchMatch && roleMatch;
    });
  }

  addUser() {

    if (
      !this.newUser.name.trim() ||
      !this.newUser.email.trim() ||
      !this.newUser.role.trim()
    ) {
      alert('Please fill all fields');
      return;
    }

    if (this.editIndex !== null) {

      this.users[this.editIndex] = {
        ...this.newUser
      };

      this.editIndex = null;

    } else {

      this.newUser.id = this.users.length + 1;

      this.users.push({
        ...this.newUser
      });
    }

    this.resetForm();
  }

  editUser(index: number) {

    this.newUser = {
      ...this.users[index]
    };

    this.editIndex = index;
  }

  deleteUser(index: number) {

    if (confirm('Delete this user?')) {
      this.users.splice(index, 1);
    }
  }

  resetForm() {

    this.newUser = {
      id: 0,
      name: '',
      email: '',
      role: ''
    };

    this.editIndex = null;
  }
}