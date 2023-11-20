import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Hero';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Amerika' },
      { id: 13, name: 'Moskau' },
      { id: 14, name: 'Deutschland' },
      { id: 15, name: 'Rosenrot' },
      { id: 16, name: 'Du hast' },
      { id: 17, name: 'Ich will' },
      { id: 18, name: 'Pussy' },
      { id: 19, name: 'Mutter' },
      { id: 20, name: 'Sonne' },
    ];
    return { heroes };
  }
  constructor() {}
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
