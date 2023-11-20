import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../Hero';
import { Input } from '@angular/core'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.sass'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
