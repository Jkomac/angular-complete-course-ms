import { Component, computed, signal } from '@angular/core'; // Signals and Computed added
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // Generating a random index to select a random user from the list of dummy users || Math.random() = [0.0, 1.0) || Math.floor() rounds down to the nearest integer

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]); // Signal to hold the selected user and automatically trigger change detection when updated || Selecting a random user from the list of dummy users
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); // Computed value to dynamically return the path of the image of the selected user (similar to a Getter but reactive) || Signals must be called as functions.

 // Method to be called when a user is selected
 onSelectUser() {
  const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  this.selectedUser.set(DUMMY_USERS[randomIndex]);
 }  
}