import { Component, inject, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe} from '@angular/common'
import { type Task } from './task.model';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  private tasksService = inject(TasksService);
  @Input({required: true}) task!: Task;

  // Method to be called when a task is completed, removing the task from the list of tasks
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}