import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
}
