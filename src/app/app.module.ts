import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToDoTasksComponent } from './to-do-tasks/to-do-tasks.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksCounterComponent } from './tasks-counter/tasks-counter.component';


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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
