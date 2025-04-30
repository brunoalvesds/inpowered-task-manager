import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inpowered-task-manager';
  optionsList = [
    {status: "All"},
    { status: "Complete" },
    { status: "Incomplete" }
  ]
  selectedOption: string;
}
