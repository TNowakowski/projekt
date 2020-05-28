import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksToDo = new Array<Task>();
  private tasksDone = new Array<Task>();

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private taskDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksToDo = [{ name: 'Zjeść', created: new Date() },
    { name: 'Posprzątać pokój', created: new Date() },
    { name: 'Odkurzyć w korytarzu', created: new Date() },
    { name: 'Zrobić kolację', created: new Date() },
    { name: 'Iść spać', created: new Date() }];
    this.taskListObs.next(this.tasksToDo);
  }

  addTask(task: Task) {
    this.tasksToDo.push(task);
    this.tasksToDo = this.tasksToDo.slice();
    this.taskListObs.next(this.tasksToDo);
  }

  remove(task: Task) {
    this.tasksToDo = this.tasksToDo.filter(e => e !== task);
    this.taskListObs.next(this.tasksToDo);
  }

  done(task: Task) {
    task.end = new Date();
    this.tasksDone.push(task);
    this.remove(task);
    this.taskDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  getTasksDoneListObs(): Observable<Array<Task>> {
    return this.taskDoneObs.asObservable();
  }

}
