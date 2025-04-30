import { Component } from '@angular/core';
import { Task } from './shared/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inpowered-task-manager';
  filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Incomplete', value: 'incomplete' }
  ];

  selectedOption: 'all' | 'completed' | 'incomplete' = 'all';
  tasks: Task[] = [];

  ngOnInit() {
    // Exemplo de tarefas
    this.tasks = [
      {
        id: 1,
        title: 'Buy milk',
        description: 'Go to the grocery store and buy low-fat milk.',
        completed: false
      },
      {
        id: 2,
        title: 'Workout',
        description: '30 minutes of treadmill running.',
        completed: true
      },
      {
        id: 3,
        title: 'Study Angular',
        description: 'Review components, inputs/outputs, and services.',
        completed: false
      }
    ];
  }

  onToggle(task: Task) {
    task.completed = !task.completed;
  }

  onDelete(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  get filteredIncompleteTasks(): Task[] {
    return this.tasks.filter(task =>
      (this.selectedOption === 'all' || this.selectedOption === 'incomplete') && !task.completed
    );
  }

  get filteredCompletedTasks(): Task[] {
    return this.tasks.filter(task =>
      (this.selectedOption === 'all' || this.selectedOption === 'completed') && task.completed
    );
  }
}
