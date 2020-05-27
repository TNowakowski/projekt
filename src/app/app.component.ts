import { Component, ViewChild } from '@angular/core';
import { TasksCounterComponent } from './tasks-counter/tasks-counter.component';
import { ToDoTasksComponent } from './to-do-tasks/to-do-tasks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('counter')
  counterComponent: TasksCounterComponent;

  @ViewChild('toDoTasks')
  todoComponent: ToDoTasksComponent;

  task: string;
  tasksToDo = new Array<string>();
  tasksDone = new Array<string>();

  addTask(task: string) {
    this.tasksToDo.push(task);
  }

  remove(task: string) {
    this.tasksToDo = this.tasksToDo.filter(e => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }

  constructor() {
  }
}
