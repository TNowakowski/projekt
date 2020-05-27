import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-tasks',
  templateUrl: './to-do-tasks.component.html',
  styleUrls: ['./to-do-tasks.component.scss']
})
export class ToDoTasksComponent {

  @Input()
  tasks = new Array<string>();

  @Output()
  rmv = new EventEmitter<string>();

  @Output()
  add = new EventEmitter<string>();

  remove(task: string) {
    this.rmv.emit(task);
  }

  done(task: string) {
    this.add.emit(task);
  }

  constructor() { }

}
