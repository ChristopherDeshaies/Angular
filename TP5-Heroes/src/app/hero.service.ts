import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of }         from 'rxjs';
import { map,delay,catchError } from "rxjs/operators";
import { Hero, heroes } from './model-data';

@Injectable()
export class HeroService {
  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getHeroes(): Observable<Hero[]> {
    return of(heroes).pipe(delay(this.delayMs)); // simulate latency with delay
  }

  addHeroes(hero : Hero): Observable<Hero> {
    heroes.push(hero);
    return of(hero).pipe(delay(this.delayMs));
  }
 
  removeHeroes(hero : Hero): Observable<Hero>  {
    if(heroes.lastIndexOf(hero) != -1)
    {
      heroes.splice(heroes.lastIndexOf(hero),1);
    }
    return of(hero).pipe((delay(this.delayMs)));
  }

  // Fake server update; assume nothing can go wrong
  updateHero(hero: Hero): Observable<Hero>  {
    const oldHero = heroes.find(h => h.id === hero.id);
    const newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
    return of(newHero).pipe(delay(this.delayMs)); // simulate latency with delay
  }
}
