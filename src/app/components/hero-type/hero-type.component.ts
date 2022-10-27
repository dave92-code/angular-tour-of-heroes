import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { heroTypes, heroTypesNames } from 'src/app/constants/hero.constants';

@Component({
  selector: 'app-hero-type',
  templateUrl: './hero-type.component.html',
  styleUrls: ['./hero-type.component.scss']
})
export class HeroTypeComponent implements OnInit {

  heroTypes = heroTypes
  heroTypesNames = heroTypesNames
  
  @Input() typeId:number;
  @Output() typeIdChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
