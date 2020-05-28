import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToDoTasksComponent } from './to-do-tasks/to-do-tasks.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksCounterComponent } from './tasks-counter/tasks-counter.component';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ToDoTasksComponent,
    DoneTasksComponent,
    AddTaskComponent,
    TasksCounterComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
