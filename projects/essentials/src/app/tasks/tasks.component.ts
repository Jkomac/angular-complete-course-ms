import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({ required: true}) userId!: string;
  @Input({ required: true}) name!: string;
  isAddingTask = false;

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

  // Method to start the process of adding a new task by showing the form.
  onStartAddTask() {
    this.isAddingTask = true;
  }

  // Method to cancel the process of adding a new task by hiding the form.
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  // Method to add a new task to the list of tasks
  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({ // unshift() is a method to add a new element (task) at the beginning of the arrayList (list of tasks) || Instead, push() adds the new element at the end of the arrayList
      id: new Date().getTime().toString(), // Example of generating a "unique" ID for the task (not the final version)
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask = false; // Hiding the form after adding the task
  }
}
