import { Component } from '@angular/core';
import { TaskService } from '../services/task-service';
import { Task } from '../models/task';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.scss']
})
export class DoneTasksComponent {

  tasks: Array<Task>;

  constructor(private taskService: TaskService) {
    this.taskService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasks = tasks.filter(t => t.isDone === true);
    });
  }

}
