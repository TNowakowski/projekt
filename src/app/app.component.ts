import { Component } from '@angular/core';
import { TaskService } from './services/task-service';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toDoTasks: Array<Task>;

  constructor(private taskService: TaskService) {
    this.taskService.getTasksListObs().subscribe((taskList: Array<Task>) => {
      this.toDoTasks = taskList;
    });
  }
}
