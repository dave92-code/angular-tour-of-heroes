import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskComponent } from './components/task/task.component';
import { TasksPageComponent } from './components/tasks/tasks-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TaskComponent,
    TasksPageComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    
  ]
})
export class TasksModule { }
