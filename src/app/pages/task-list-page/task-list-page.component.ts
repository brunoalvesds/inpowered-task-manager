import { Component, OnInit } from '@angular/core';
import { Task } from '../../shared/models/task.model';
import { TaskService } from 'src/app/shared/services/task/task.service';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.scss']
})
export class TaskListPageComponent implements OnInit {
  addTaskDialogVisible = false;
  newTaskTitle = '';
  newTaskDescription = '';

  filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Incomplete', value: 'incomplete' }
  ];
  selectedOption: 'all' | 'completed' | 'incomplete' = 'all';

  completedTasks: Task[] = [];
  incompleteTasks: Task[] = [];

  // New property to control whether completed tasks are hidden or not
  isCompletedHidden = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadFilteredTasks(); // Initial load of tasks
  }

  // Method to load tasks based on the selected filter
  loadFilteredTasks(): void {
    const grouped = this.taskService.getGroupedTasks(this.selectedOption);
    this.completedTasks = grouped.completed;
    this.incompleteTasks = grouped.incomplete;

    // If 'completed' is selected, hide completed tasks
    this.isCompletedHidden = this.selectedOption !== 'all';
  }

  // Method to handle task addition
  addTask(): void {
    if (!this.newTaskTitle) return;

    const newTask: Task = {
      id: Date.now(),
      title: this.newTaskTitle.trim(),
      description: this.newTaskDescription.trim(),
      completed: false
    };

    this.taskService.addTask(newTask);

    // Clear fields and close dialog
    this.newTaskTitle = '';
    this.newTaskDescription = '';
    this.addTaskDialogVisible = false;

    // Reload tasks after adding a new one
    this.loadFilteredTasks();
  }

  // Method to toggle task completion status
  onToggle(task: Task): void {
    this.taskService.updateTask({ ...task, completed: !task.completed });
    // Reload tasks after status update
    this.loadFilteredTasks();
  }

  // Method to delete a task
  onDelete(task: Task): void {
    this.taskService.deleteTask(task);

    // Reload tasks after deletion
    this.loadFilteredTasks(); 
  }

  // Method to handle filter changes
  onFilterChange(): void {
    // Reload tasks based on new filter
    this.loadFilteredTasks();
  }
}
