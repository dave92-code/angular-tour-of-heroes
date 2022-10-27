import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-type',
  templateUrl: './hero-type.component.html',
  styleUrls: ['./hero-type.component.scss']
})
export class HeroTypeComponent implements OnInit {

  @Input() type:string;

  constructor() { }

  ngOnInit(): void {
  }

}
