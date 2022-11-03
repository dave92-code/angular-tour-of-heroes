import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HEROES } from 'src/app/heroes/models/mock-heroes';
import { usersMock } from 'src/app/heroes/models/mock.users';

import { Hero } from '../../heroes/models/hero.model';

import { todos } from '../../tasks/models/mock-todos';

import { Todos } from '../../tasks/models/todos.model';



@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  // tareas = todos;
  createDb() {
    
    const heroes = HEROES;
    const users = usersMock;
    const tareas = todos;

    return {heroes, users, tareas}
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}