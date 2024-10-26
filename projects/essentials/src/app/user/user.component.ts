import { Component, input, computed } from '@angular/core'; // Note: 'input' starts with a lowercase 'i'

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  
  // ¡¡Input() signals are read-only in the child component, so values can not be changed in the child component!!
  avatar = input.required<string>(); // The input() function is used to create a signal for the user's avatar  || .required() ensures it must be provided by the parent component || The angle brackets <> specify the expected type
  name = input.required<string>();
 
  imagePath = computed(() => 'assets/users/' + this.avatar());

   // Method to be called when a user is selected
   onSelectUser() {}
}