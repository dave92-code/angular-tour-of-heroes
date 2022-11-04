import { Component, OnInit } from '@angular/core';
import { allUsersNames } from 'src/app/tasks/models/todos.constant';
import { Todos } from 'src/app/tasks/models/todos.model';
import { TareaService } from 'src/app/shared/services/tarea.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {

  tareas: Todos[];
  allUsersNames = allUsersNames;
  completedTasks: number;

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.getTareas();
  }

  async getTareas(): Promise<void> {
    this.tareas = await this.tareaService.getTareas();
    console.log(this.tareas)
    this.getCompleted();
  }

  getCompleted(){
    let tareasCompleted=this.tareas.filter(tarea => tarea.completed === true);
    let completedTasksLength = tareasCompleted.length;

    this.completedTasks = (completedTasksLength * 100) / this.tareas.length;
    console.log(this.completedTasks);
  }

}
