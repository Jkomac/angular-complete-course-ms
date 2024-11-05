import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  private tasksService = inject(TasksService);
  @Input({ required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // Method to handle the cancel action by emitting the cancel event
  onCancel() {
    this.close.emit();
  }

  // Method to add a new task to the list of tasks
  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}