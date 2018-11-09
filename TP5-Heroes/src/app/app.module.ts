import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello/hello.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { ReactiveFormsModule } 
from '@angular/forms';  // <-- #1 import module

import { HeroService }         from './hero.service'; //  <-- #1 import service
import { HerohttpService }         from './herohttp.service'; //  <-- #1 import service
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ReactiveFormsModule // <-- #2 add to Angular module imports
  ],
  providers: [ HeroService,HerohttpService ], // <-- #4 provide HeroService
  bootstrap: [AppComponent]
})
export class AppModule { }
