import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('Hero service: fetched heroes');
    return heroes;
  }
}
