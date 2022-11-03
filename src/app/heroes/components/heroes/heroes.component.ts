import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero, HeroClass } from '../../models/hero.model';
// import { HEROES } from '../mock-heroes';

import { MessagesService } from 'src/app/shared/services/messages.service';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user.model';

import { HeroService } from 'src/app/shared/services/hero.service';
import { UserService } from 'src/app/shared/services/user.service';
import { heroTypes, heroTypesNames } from 'src/app/constants/hero.constants';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  newHero: HeroClass = new HeroClass();

  date14:Date;
  
  users: User[];

  tiposHeroes = ['Guerrero','Mago','Animal'
  ]
  tipoSeleccionado:string;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  heroTypes = heroTypes
  heroTypesNames = heroTypesNames

  constructor(private heroService: HeroService, private messageService: MessagesService, private router: Router, private http: HttpClient, private userService: UserService) {
    this.date14 = new Date();
   }

  ngOnInit(): void {
    this.getHeroes();
    // this.getUsers();
    // this.getUsersPromise();
    this.getUsersPromiseAsync();
  }

  onSelect(hero: Hero): void {
    
    this.messageService.add('HeroesComponent: Selected Hero id=${hero.id}');
  }

  /**sacamos los heroes por service
   * 
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(res => {
      this.heroes = res;
    });
  }

  /**sacamos los users con susbcribe*/
  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })
  }


  /**sacamos los users con promesa */
  getUsersPromise(): void {
    this.userService.getUsersPromise().then(data => {
      this.users = data;
    })
  }

  /**sacamos los users con await */
  async getUsersPromiseAsync(): Promise<void> {
    this.users = await this.userService.getUsersPromiseAsync();
    // const url = 'https://jsonplaceholder.typicode.com/users';
    // this.users = await this.http.get(url).toPromise()
  }

  /**escuchamos al event emitter para cambiar el nombre del hero y saber cual hemos cambiado para pintar la estrella */
  listenner(event: string, hero: Hero): void {
    hero.name = event;
    hero['selected'] = true;
  }


  navigateToHero(hero: Hero): void {
    // this.router.navigate(['/detail/'+hero.id])
    hero.selected = !hero.selected;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
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
