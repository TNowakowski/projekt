import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.scss']
})
export class DoneTasksComponent implements OnInit {

  @Input()
  tasks = new Array<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
