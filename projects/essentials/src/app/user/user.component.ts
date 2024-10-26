import { Component, Input } from '@angular/core'; // Note: 'Input' starts with an uppercase 'I'
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // Generating a random index to select a random user from the list of dummy users || Math.random() = [0.0, 1.0) || Math.floor() rounds down to the nearest integer

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // Input decorator to allow the parent component to pass data to this component
  @Input({ required: true }) avatar!: string; // Marked as required to ensure the parent component provides a value || Non-null assertion operator (!) is used to tell TypeScript that the variable will be initialized later
  @Input({ required: true }) name!: string;

  // Getter to dynamically return the path of the image of the users
  get imagePath() {
   return 'assets/users/' + this.avatar;
  }

  // Method to be called when a user is selected
  onSelectUser() {}
 }