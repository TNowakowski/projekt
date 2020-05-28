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
    this.taskService.getTasksDoneListObs().subscribe((doneTasks: Array<Task>) => {
      this.tasks = doneTasks;
    });
  }

}
