import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { allUsers, allUsersNames } from 'src/app/constants/todos.constant';
import { Todos } from 'src/app/models/todos.model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {

  allUsers = allUsers;
  allUsersNames = allUsersNames
  @Input() tarea: Todos;
  // @Output() tareaChange: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
