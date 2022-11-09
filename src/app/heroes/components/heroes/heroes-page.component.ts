import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Hero, HeroClass } from '../../models/hero.model';
// import { HEROES } from '../mock-heroes';

import { MessagesService } from 'src/app/shared/services/messages.service';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user.model';

import { HeroService } from 'src/app/shared/services/hero.service';
import { UserService } from 'src/app/shared/services/user.service';
import { heroTypes, heroTypesImgs, heroTypesNames } from 'src/app/heroes/models/hero.constants';
import { NgForm } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss']
})
export class HeroesPageComponent implements OnInit {

  //variables de hero
  heroes: Hero[] = [];
  newHero = new HeroClass();
  newHeroTest = new HeroClass();

  //variable formulario
  @ViewChild('heroFormTest') formHero: NgForm;
  @ViewChild('heroForm') heroForm: NgForm;

  //variables de popups
  displayPopNewHero: boolean = false;

  //variables componentes
  //toggle
  toggleChecked:boolean = false;
  //menuitems
  items: MenuItem[];
  //------------------------------

  date14: Date;

  users: User[];

  tiposHeroes = ['Guerrero', 'Mago', 'Animal']
  tipoSeleccionado: string;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  heroTypes = heroTypes
  heroTypesNames = heroTypesNames
  heroTypesImgs = heroTypesImgs

  constructor(private heroService: HeroService, private messageService: MessagesService, private router: Router, private http: HttpClient, private userService: UserService) {
    this.date14 = new Date();
  }

  ngOnInit(): void {
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ]
    this.getHeroes();
    console.log(this.heroTypesImgs)
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

  onClickAddHero(): void {
    // this.add(this.newHero.name);
    // this.newHero.name = '';
  }

  onSubmit() {
    this.add(this.newHero.name);
    this.newHero.name = '';
    this.displayPopNewHero = false;
  }

  onSubmitTest() {
    // this.formHero.resetForm();
  }

  onClickOpenPopUp() {
    this.displayPopNewHero = true;
  }

  closePopUp() {
    this.displayPopNewHero = false;
    this.heroForm.resetForm();
  }

  // onPopUpClose(popUpData: any) {
  //   if (popUpData) {
  //     this.add(popUpData);
  //   }
  //   this.displayPopNewHero = false;
  // }
}
