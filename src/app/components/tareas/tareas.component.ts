import { Component, OnInit } from '@angular/core';
import { allUsersNames } from 'src/app/constants/todos.constant';
import { Todos } from 'src/app/models/todos.model';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

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
