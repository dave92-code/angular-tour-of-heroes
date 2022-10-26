import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  // star = '/assets/svg/icons/star.svg'

  @Input() text?: string;
  @Input() selected: boolean;
  @Output() textChange: EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

  onChangeText(){
    console.log('emiting text'+ this.text)
    this.textChange.emit(this.text);
  }

}
