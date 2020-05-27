import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  @Output()
  emitNewTask = new EventEmitter<string>();

  @ViewChild('inputText')
  input: ElementRef;

  task: string;

  addTask() {
    this.emitNewTask.emit(this.task);
    this.task = '';
  }

  show() {
    console.log(this.input);
  }

  constructor() { }


}
