import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor(private heroService: HeroService, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Selected Hero id=${hero.id}');
  }

  /**sacamos los heroes por service
   * 
   */
  getHeroes() {
    this.heroService.getHeroes().subscribe(res => {
      this.heroes = res;
    });
  }

  /**
   * 
   * @param event string
   * @param hero el heroe seleccionado
   */
  // receiveFromLabel(event:string, hero:Hero){
  //   console.log('soy el evento de label: ');
  //   console.log(event)
  //   hero.name = event;
  // }
}
