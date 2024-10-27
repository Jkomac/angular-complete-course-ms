import { Component, EventEmitter, Input, output } from '@angular/core'; // Note: 'Input' starts with an uppercase 'I' & 'output' starts with a lowercase 'o'

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

  // ¡¡ output() function does NOT create a signal unlike the input() function. Instead, it just creates an event like an EventEmitter !!
  select = output<string>(); // The output() function is used to create an event emitter (created automatically) || The angle brackets <> are used to specify the type of data to be emitted

  // Getter to dynamically return the path of the image of the users
  get imagePath() {
   return 'assets/users/' + this.avatar;
  }

  // Method to be called when a user is selected
  onSelectUser() {
    this.select.emit(this.id);
  }
 }