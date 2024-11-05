import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false, // If a component is declared in the AppModule, it is not a standalone component. By default, standalone is false, so it can be omitted.
  // If a component is not standalone, it does not have any imports, so it must be omitted.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  // Getter to get the selected user by ID
  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId);
  }

  // Method to be called when a user is selected to get the user ID
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
