import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../personne';

@Component({
selector: 'app-hello',
  
templateUrl: './hello.component.html',
  
//template : '<p> {{message}} </p>',
styleUrls: ['./hello.component.css']

})

export class HelloComponent implements OnInit {
  
@Input() param1 : number;

public message: string;
public madate: Date;
private pers : Personne;

constructor() { 
  this.madate = new Date();
  this.pers = new Personne();
  this.pers.setNom("CGE");
}

ngOnInit() {
this.message = 'Hello world : '+ this.param1+"-"+this.pers.getNom(); }
}
