import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})

export class UserComponent {
  @Input({ required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  // Getter to dynamically return the path of the image of the users
  get imagePath() {
   return 'assets/users/' + this.user.avatar;
  }

  // Method to be called when a user is selected
  onSelectUser() {
    this.select.emit(this.user.id);
  }
 }