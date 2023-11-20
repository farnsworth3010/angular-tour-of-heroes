import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../Hero';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  getHeroes() {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
  ngOnInit(): void {
    this.getHeroes()
  }

}
