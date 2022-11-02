import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from '../models/hero.model';
import { todos } from '../models/mock-todos';
import { Todos } from '../models/todos.model';



@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  // tareas = todos;
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const users = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    // const tareas = [
    //   { userId: 1, id: 101, title: 'explicabo enim cumque porro aperiam occaecati minima', completed: false },
    //   { userId: 2, id: 108, title: 'a eos eaque nihil et exercitationem incidunt delectus', completed: true },
    //   { userId: 1, id: 10, title: 'illo est ratione doloremque quia maiores aut', completed: true },
    //   { userId: 1, id: 16, title: 'accusamus eos facilis sint et aut voluptatem', completed: false },
    //   { userId: 2, id: 31, title: 'nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis', completed: true },
    //   { userId: 1, id: 32, title: 'nemo perspiciatis ut dolor libero commodi blanditiis omnis', completed: true },
    //   { userId: 2, id: 33, title: 'nemo perspiciatis repellat ut dolor libero comnditiis omnis', completed: false },
    //   { userId: 1, id: 34, title: 'nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis', completed: true },
    //   { userId: 2, id: 35, title: 'nemo perspiciatis repellatibero commodi blanditiis omnis', completed: true },
    // ];
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