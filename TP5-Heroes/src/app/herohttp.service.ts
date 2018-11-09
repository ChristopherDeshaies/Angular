import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of }         from 'rxjs';
import {Http, Response} from '@angular/http';
//import 'rxjs/Rx'; //get everything from Rx    
import { map,delay,catchError, finalize } from "rxjs/operators";
import {Hero,Address  } from './hero-data';
@Injectable()
export class HerohttpService {
aHero:Array<any>;
hero : Hero[];

delayMs = 500;// = new Array<any>();
//private jsonFileURL: string = "http://localhost:4200/assets/hero.json";  
private jsonFileURL: string = "./hero.json";  
constructor(private http:Http) {    }
private load()
  {
      this.http.get(this.jsonFileURL)
                    .subscribe(response => 
                      this.aHero = response.json());
  }
  get() : Observable<Array<any>>
        {
            this.load();
            console.log(this.aHero);
            return of(this.aHero).pipe(delay(this.delayMs)); // simulate latency with delay
        }   
  getinterface(): Observable<Hero[]>
      {
          const hero = Object.assign(this.http.get(this.jsonFileURL)
          .pipe(map(mapHeros),
          catchError(error => of(this.handleError(error))),
        finalize(()=>console.log("FINALLY"))));//Gérer les erreurs avec catchError(this.handleError('getHeroes', []))
          return (hero).pipe(delay(this.delayMs)); // simulate latency with delay
        }
  private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
      }
}//FIN DE LA CLASSE

function mapHeros(response:Response): Hero[]{
  return response.json().map(toHero);
}

function toHero(r:any): Hero{
  const hero: Hero = {
      id: r.id as number,
      name: r.name as string,
      addresses: [],
    };
  console.log('Parsed hero:', hero);
  return hero;
}

function toHero2(r:any): Hero{
  const hero = new Hero(r.id,r.name,r.addresses);
  console.log('Parsed hero:', hero);
  return hero;
}

