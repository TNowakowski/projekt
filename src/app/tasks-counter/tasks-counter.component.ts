import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-counter',
  templateUrl: './tasks-counter.component.html',
  styleUrls: ['./tasks-counter.component.scss']
})
export class TasksCounterComponent implements OnInit {

  @Input() toDoTasks: number;
  @Input() doneTasks: number;

  constructor() { }

  ngOnInit(): void {
  }

}
