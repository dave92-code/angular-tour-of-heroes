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
  // @Inçput() tarea: Todos;
  @Input() titulo: string | undefined;
  @Input() completed: boolean | undefined;
  @Input() userId: number | undefined;
  // @Output() tareaChange: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
