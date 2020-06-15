import { Component } from '@angular/core';
import { TaskService } from '../services/task-service';
import { Task } from '../models/task';

@Component({
  selector: 'app-to-do-tasks',
  templateUrl: './to-do-tasks.component.html',
  styleUrls: ['./to-do-tasks.component.scss']
})
export class ToDoTasksComponent {

  tasks: Array<Task>;

  constructor(private tasksService: TaskService) {
    this.tasksService.getTasksListObs().subscribe((taskList: Array<Task>) => {
      this.tasks = taskList.filter(t => t.isDone === false);
    });
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    this.tasksService.done(task);
  }
}
