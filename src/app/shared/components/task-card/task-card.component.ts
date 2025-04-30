import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task!: Task;
  @Output() toggle = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

}
