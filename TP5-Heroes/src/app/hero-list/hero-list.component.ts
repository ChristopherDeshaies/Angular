import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs';
import { finalize }        from 'rxjs/operators';


//import 'rxjs/add/operator/finally';

import { Address, Hero }    from '../hero-data';
import { HerohttpService }  from '../herohttp.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  isLoading = false;
  selectedHero: Hero;

  constructor(private heroService: HerohttpService) { }
  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService.getinterface()
                      // Todo: error handling
                      .pipe(finalize( () => this.isLoading = false));
    this.selectedHero = undefined;
  }

  select(hero: Hero) { this.selectedHero = hero; }
}
