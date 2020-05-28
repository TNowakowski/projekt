import { Component } from '@angular/core';
import { TaskService } from '../services/task-service';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks-counter',
  templateUrl: './tasks-counter.component.html',
  styleUrls: ['./tasks-counter.component.scss']
})
export class TasksCounterComponent {

  toDoTasks: number;
  doneTasks: number;

  constructor(private taskService: TaskService) {
    this.taskService.getTasksListObs().subscribe((taskList: Array<Task>) => {
      this.toDoTasks = taskList.length;
    });

    this.taskService.getTasksDoneListObs().subscribe((doneTasksList: Array<Task>) => {
      this.doneTasks = doneTasksList.length;
    });
  }

}
