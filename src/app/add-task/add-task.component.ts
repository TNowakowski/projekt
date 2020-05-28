import { Component } from '@angular/core';
import { TaskService } from '../services/task-service';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  taskName: string;

  constructor(private taskService: TaskService) {
  }
  addTask() {
    const task: Task = { name: this.taskName, created: new Date() };
    this.taskService.addTask(task);
    this.taskName = '';
  }

}
