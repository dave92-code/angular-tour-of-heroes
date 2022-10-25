import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() text?: string;
  @Output() textEmit: EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

  onChangeText(){
    this.textEmit.emit(this.text);
    console.log('cambia');
  }

}
