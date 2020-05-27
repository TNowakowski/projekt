import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  @Output()
  emitNewTask = new EventEmitter<string>();


  task: string;

  addTask() {
    this.emitNewTask.emit(this.task);
    this.task = '';
  }

  show(et: HTMLInputElement) {
    console.log(et);
  }

  constructor() { }


}
