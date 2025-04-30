import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor() {
    // Simulated initial data
    const initialTasks: Task[] = [
      { id: 1, title: 'Buy milk', description: 'Low-fat milk', completed: false },
      { id: 2, title: 'Workout', description: '30 mins treadmill', completed: true },
      { id: 3, title: 'Study Angular', description: 'Components and Services', completed: false }
    ];
    this.tasksSubject.next(initialTasks);
  }

  getTasks(): Task[] {
    return this.tasksSubject.getValue();
  }

  updateTask(updated: Task): void {
    const updatedList = this.getTasks().map(task =>
      task.id === updated.id ? { ...task, completed: updated.completed } : task
    );
    this.tasksSubject.next(updatedList);
  }

  deleteTask(taskToDelete: Task): void {
    const updatedList = this.getTasks().filter(t => t.id !== taskToDelete.id);
    this.tasksSubject.next(updatedList);
  }

  filterTasksByStatus(status: 'all' | 'completed' | 'incomplete'): Task[] {
    const tasks = this.getTasks();
    if (status === 'completed') return tasks.filter(t => t.completed);
    if (status === 'incomplete') return tasks.filter(t => !t.completed);
    return tasks;
  }

  getGroupedTasks(status: 'all' | 'completed' | 'incomplete'): { completed: Task[]; incomplete: Task[] } {
    const filtered = this.filterTasksByStatus(status);
    return {
      completed: filtered.filter(t => t.completed),
      incomplete: filtered.filter(t => !t.completed)
    };
  }
}