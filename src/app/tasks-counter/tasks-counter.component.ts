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
      const pendingTasks = taskList.filter(t => t.isDone === false);
      this.toDoTasks = pendingTasks.length;
    });

    this.taskService.getTasksListObs().subscribe((doneTasksList: Array<Task>) => {
      const finishedTasks = doneTasksList.filter(t => t.isDone === true);
      this.doneTasks = finishedTasks.length;
    });
  }

}
