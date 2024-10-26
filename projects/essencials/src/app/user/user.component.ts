import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // Generating a random index to select a random user from the list of dummy users || Math.random() = [0.0, 1.0) || Math.floor() rounds down to the nearest integer

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  // Getter to dynamically return the path of the image of the selected user
  get imagePath() {
   return 'assets/users/' + this.selectedUser.avatar;
  }
  
  onSelectUser() {
   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
   this.selectedUser = DUMMY_USERS[randomIndex];
  }
 }