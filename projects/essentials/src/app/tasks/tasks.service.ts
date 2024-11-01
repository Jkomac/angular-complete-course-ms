// Services are used to encapsulate and share data and logic across different components. They help in organizing the code by separating business logic from presentation logic, making the code more reusable and maintainable.

import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({providedIn: 'root'}) // The @Injectable() decorator is used to define this class as a service, being provided every time it is requested. {providedIn: 'root'} is used to provide the service at the root level of the application.
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
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
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  // Method to get the tasks of the selected user (Array of tasks)
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId); // filter() is used to return all the tasks that belong to the selected user
  }

  // Method to add a new task to the list of tasks
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({ // unshift() is a method to add a new element (task) at the beginning of the arrayList (list of tasks) || Instead, push() adds the new element at the end of the arrayList
      id: new Date().getTime().toString(), // Example of generating a "unique" ID for the task (not the final version)
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  // Method to remove a task from the list of tasks
  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}