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

  addTask() {
    if (this.task !== undefined && this.task.trim() !== '') {
      this.tasksToDo.push(this.task);
    }
    this.task = '';
  }

  remove(task: string) {
    this.tasksToDo = this.tasksToDo.filter(e => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
}
