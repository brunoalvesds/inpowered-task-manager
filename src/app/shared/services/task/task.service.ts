import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // BehaviorSubject is used to store and observe the tasks in real-time
  private tasksSubject = new BehaviorSubject<Task[]>(this.getTasksFromLocalStorage());

  // Observable to be used in components to subscribe to task updates
  tasks$ = this.tasksSubject.asObservable();

  constructor() { }

  // Retrieve tasks from localStorage or initialize if not available
  private getTasksFromLocalStorage(): Task[] {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }

  // Save tasks to localStorage to persist them even after a page reload
  private saveTasksToLocalStorage(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Add a new task to the list
  addTask(newTask: Task): void {
    const currentTasks = this.getTasksFromLocalStorage();
    const updatedTasks = [...currentTasks, newTask]; // Add the new task to the current list
    this.saveTasksToLocalStorage(updatedTasks); // Save updated tasks to localStorage
    this.tasksSubject.next(updatedTasks); // Notify subscribers about the update
  }

  // Delete a task from the list
  deleteTask(taskToDelete: Task): void {
    const currentTasks = this.getTasksFromLocalStorage();
    const updatedTasks = currentTasks.filter(task => task.id !== taskToDelete.id); // Filter out the deleted task
    this.saveTasksToLocalStorage(updatedTasks); // Save updated tasks to localStorage
    this.tasksSubject.next(updatedTasks); // Notify subscribers about the update
  }

  // Update a task (e.g., mark as completed or incomplete)
  updateTask(updatedTask: Task): void {
    const currentTasks = this.getTasksFromLocalStorage();
    const updatedTasks = currentTasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task // Update the task if IDs match
    );
    this.saveTasksToLocalStorage(updatedTasks); // Save updated tasks to localStorage
    this.tasksSubject.next(updatedTasks); // Notify subscribers about the update
  }

  // Retrieve tasks based on the selected filter ('all', 'completed', or 'incomplete')
  getGroupedTasks(filter: 'all' | 'completed' | 'incomplete') {
    const tasks = this.getTasksFromLocalStorage();
    let filteredTasks;

    switch (filter) {
      case 'completed':
        filteredTasks = tasks.filter(task => task.completed); // Filter completed tasks
        break;
      case 'incomplete':
        filteredTasks = tasks.filter(task => !task.completed); // Filter incomplete tasks
        break;
      default:
        filteredTasks = tasks; // Return all tasks if no filter is applied
        break;
    }

    // Return tasks grouped into completed and incomplete
    return {
      completed: filteredTasks.filter(task => task.completed),
      incomplete: filteredTasks.filter(task => !task.completed)
    };
  }

  // Return all tasks (can be used for direct observation or updating)
  getTasks(): Task[] {
    return this.getTasksFromLocalStorage();
  }
}
