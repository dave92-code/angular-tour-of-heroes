import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TareaComponent } from './components/tarea/tarea.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TareaComponent,
    TareasComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    
  ]
})
export class TasksModule { }
