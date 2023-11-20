import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../Hero';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent, RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.sass',
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  heroes: Hero[] = [];
}
