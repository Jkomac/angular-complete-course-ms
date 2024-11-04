import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  constructor(private tasksService: TasksService) {}

  @Input({ required: true}) userId!: string;
  @Input({ required: true}) name!: string;
  isAddingTask = false;

  // Getter to get the tasks of the selected user (Array of tasks)
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // Method to start the process of adding a new task by showing the form.
  onStartAddTask() {
    this.isAddingTask = true;
  }

  // Method to close the process of adding a new task by hiding the form.
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}