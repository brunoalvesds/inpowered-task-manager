import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent {
  @Input() visible = false;
  @Input() title = '';
  @Input() description = '';

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() taskAdd = new EventEmitter<{ title: string; description: string }>();

  onAdd(): void {
    if (this.title.trim()) {
      this.taskAdd.emit({
        title: this.title.trim(),
        description: this.description.trim()
      });
      this.close();
    }
  }

  close(): void {
    this.visibleChange.emit(false);
  }
}
