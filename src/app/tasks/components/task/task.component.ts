import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { allUsers, allUsersNames } from 'src/app/tasks/models/todos.constant';
import { Todos } from 'src/app/tasks/models/todos.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  allUsers = allUsers;
  allUsersNames = allUsersNames
  // @Inçput() tarea: Todos;
  @Input() id:number | undefined;
  @Input() titulo: string | undefined;
  @Input() completed: boolean | undefined;
  @Input() userId: number | undefined;
  @Output() statusChange:EventEmitter<any> = new EventEmitter();
  // @Output() tareaChange: EventEmitter<any> = new EventEmitter()

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToTask(){
    // this.router.navigate([''])
    this.completed = !this.completed
    let aux={
      id:this.id,
      completed:this.completed
    }
    this.statusChange.emit(aux);
  }

}
