import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToDoTasksComponent } from './to-do-tasks/to-do-tasks.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksCounterComponent } from './tasks-counter/tasks-counter.component';
// import { TaskService } from './services/task-service';


@NgModule({
  declarations: [
    AppComponent,
    ToDoTasksComponent,
    DoneTasksComponent,
    AddTaskComponent,
    TasksCounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
