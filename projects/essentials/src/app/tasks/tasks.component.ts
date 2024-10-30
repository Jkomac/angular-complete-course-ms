import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({ required: true}) userId!: string;
  @Input({ required: true}) name!: string; // Optional Property (?) is used to make the property optional. If the property is not provided, it will be undefined.
  // @Input() name: string | undefined; // Union Type (|) is used to define multiple types for a property.

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  // Getter to get the tasks of the selected user (Array of tasks)
  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId); // filter() is used to return all the tasks that belong to the selected user
  }

  // Method to be called when a task is completed, removing the task from the list of tasks
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
