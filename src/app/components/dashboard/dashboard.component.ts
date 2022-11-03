import { Component, OnInit } from '@angular/core';
import { Hero } from '../../heroes/models/hero.model';
import { HeroService } from '../../shared/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes:Hero[] = [];

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe(res=>{
      // this.heroes = res.splice(1, 5);
      this.heroes = res;
      
    })
  }

}
