import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root', // Selector to use the component in HTML file
  standalone: true, // Indicates whether the component is independent (true) or needs to be declared in an Angular module (false)
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent], // Importing those components which are used in this component
  templateUrl: './app.component.html', // Path to the HTML file to be rendered || HTML code can be written here (inline template) by using `template` instead of `templateUrl`
  styleUrl: './app.component.css' // Path to the CSS file to be applied || CSS code can be written here (inline style) by using `styles` instead of `styleUrl`
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUsername!: string;

  // Method to be called when a user is selected
  onSelectUser(id: string) {
    // [DUMMY_USERS.find(user => user.id === id)] returns an element ("user") of the array of DUMMY_USERS, therefore I am able to access to the "name" property.
    this.selectedUsername = DUMMY_USERS.find(user => user.id === id)!.name; // Non-Null Assertion Operator (!) is used to tell the compiler/TypeScript that the value will NOT be either NULL or UNDEFINED.
  }
}
