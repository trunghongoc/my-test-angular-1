import { Component, OnInit } from '@angular/core'

import { Hero } from './hero'
import { HeroService } from '../../services/hero/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Trung Ho Ngoc'
  }

  selectedHero?: Hero

  heroes!: Hero[]

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes))
  }
}
