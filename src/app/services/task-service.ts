import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    const tasksToDo = [{ name: 'Zjeść', created: new Date().toLocaleString(), isDone: false },
    { name: 'Posprzątać pokój', created: new Date().toLocaleString(), isDone: false },
    { name: 'Odkurzyć w korytarzu', created: new Date().toLocaleString(), isDone: false },
    { name: 'Zrobić kolację', created: new Date().toLocaleString(), isDone: false },
    { name: 'Iść spać', created: new Date().toLocaleString(), isDone: false },
    { name: 'Obudzić się', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true }];
    this.taskListObs.next(tasksToDo);
  }

  addTask(task: Task) {
    const list = this.taskListObs.getValue();
    list.push(task);
    this.taskListObs.next(list);
  }

  remove(task: Task) {
    const list = this.taskListObs.getValue().filter(t => t !== task);
    this.taskListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.taskListObs.getValue();
    this.taskListObs.next(list);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

}
