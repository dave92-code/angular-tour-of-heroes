
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss']
})
export class NewHeroComponent implements OnInit {

  @ViewChild('heroForm') heroForm: NgForm;

  @Input() header: string;
  @Input() buttonAcceptText: string;
  @Input() displayPopUp:boolean;

  @Output() data:EventEmitter<any> = new EventEmitter();


  newHeroName:string;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.heroForm.resetForm();
    this.data.emit(this.newHeroName);
  }

  closePopUp(){
    this.heroForm.resetForm();
    this.data.emit();
  }
}
