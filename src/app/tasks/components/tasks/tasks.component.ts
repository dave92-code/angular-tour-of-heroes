import { Component, OnInit } from '@angular/core';
import { allUsersNames } from 'src/app/tasks/models/todos.constant';
import { Todos } from 'src/app/tasks/models/todos.model';
import { TareaService } from 'src/app/shared/services/tarea.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tareas: Todos[];
  allUsersNames = allUsersNames;

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.getTareas();
  }

  async getTareas(): Promise<void> {
    this.tareas = await this.tareaService.getTareas();
    console.log(this.tareas)
  }

}
