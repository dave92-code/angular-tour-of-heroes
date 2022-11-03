import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../../shared/services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero?: Hero;
  id:number;

  constructor(private route: ActivatedRoute,
    private heroService:HeroService,
    private location:Location) {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
     }

  ngOnInit(): void {
    this.getHero();
    console.log(this.id)
  }

  getHero(){
    this.heroService.getHero(this.id).subscribe(res=>{
      this.hero = res;
    })
  }

  goBack(){
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
