import { Injectable } from '@angular/core'
import { Hero } from '../../pages/heroes/hero'
import { HEROES } from '../../pages/heroes/mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}

  getHeroes(): Hero[] {
    return HEROES
  }
}
