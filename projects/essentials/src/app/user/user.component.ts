import { Component, EventEmitter, Input, Output } from '@angular/core'; // Note: 'Input' starts with an uppercase 'I'

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // Input decorator to allow the parent component to pass data to this component
  @Input({ required: true}) id!: string; // Marked as required to ensure the parent component provides a value || Non-null assertion operator (!) is used to tell TypeScript that the variable will be initialized later
  @Input({ required: true }) avatar!: string; 
  @Input({ required: true }) name!: string;

  // Output decorator to allow this component to pass data to the parent component through events
  @Output() select = new EventEmitter();

  // Getter to dynamically return the path of the image of the users
  get imagePath() {
   return 'assets/users/' + this.avatar;
  }

  // Method to be called when a user is selected
  onSelectUser() {
    this.select.emit(this.id);
  }
 }