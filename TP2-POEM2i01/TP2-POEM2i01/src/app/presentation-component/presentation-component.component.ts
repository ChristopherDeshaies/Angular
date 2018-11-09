import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-presentation-component',
  templateUrl: './presentation-component.component.html',
  styleUrls: ['./presentation-component.component.css']
})
export class PresentationComponentComponent implements OnInit {

  private nom: string;
  private tabUtilisateur: Utilisateur[];

  ngOnInit() {
    this.tabUtilisateur = new Array<Utilisateur>();
  }

  ajouterUtilisateur() {
    this.tabUtilisateur.push(new Utilisateur(this.nom));
  }

  supprimerUtilisateur(id: number) {
    this.tabUtilisateur.splice(id, 1);
  }

  viderUtilisateur() {
    this.tabUtilisateur = new Array<Utilisateur>();
  }

}
