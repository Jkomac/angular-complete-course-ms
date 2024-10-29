import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input() name?: string; // Optional Property (?) is used to make the property optional. If the property is not provided, it will be undefined.
  // @Input() name: string | undefined; // Union Type (|) is used to define multiple types for a property.
}
