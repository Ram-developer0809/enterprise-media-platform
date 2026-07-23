import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.scss']
})
export class NotificationsComponent {

  notifications = [
    { title: 'New User Registered', time: '2 min ago', read: false },
    { title: 'Movie Uploaded', time: '10 min ago', read: false },
    { title: 'Revenue Report Generated', time: '1 hour ago', read: true },
    { title: 'Profile Updated', time: 'Yesterday', read: true }
  ];

  markAsRead(item: any) {
    item.read = true;
  }

  deleteNotification(index: number) {
    this.notifications.splice(index, 1);
  }
  constructor(private router: Router) {}

goToNotifications() {
  this.router.navigate(['/notifications']);
}

goToSettings() {
  this.router.navigate(['/settings']);
}
}