import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Hero } from '../../pages/heroes/hero'
import { HEROES } from '../../pages/heroes/mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES)
  }
}
