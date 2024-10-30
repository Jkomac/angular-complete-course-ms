import { Component, EventEmitter, Input, Output } from '@angular/core'; // Note: 'Input' and 'Output' start with an uppercase 'I' and 'O'
import { type User } from './user.model'; // Importing the custom User interface (from the user.model.ts). The 'type' keyword is optional and can be omitted.

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // Input decorator to allow the parent component to pass data to this component || Required to ensure the parent component provides a value || Non-null Assertion (!) is used to tell TypeScript that the variable will be initialized later
  @Input({ required: true}) user!: User;

  // Output decorator to allow this component to pass data to the parent component through events
  @Output() select = new EventEmitter<string>(); // Angle brackets are used as an extra layer of security (optionals) to ensure that the EventEmitter is of type string

  // Getter to dynamically return the path of the image of the users
  get imagePath() {
   return 'assets/users/' + this.user.avatar;
  }

  // Method to be called when a user is selected
  onSelectUser() {
    this.select.emit(this.user.id);
  }
 }