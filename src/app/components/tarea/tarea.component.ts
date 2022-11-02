import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {

  @Input() tarea: any;

  constructor() { }

  ngOnInit(): void {
  }

}
