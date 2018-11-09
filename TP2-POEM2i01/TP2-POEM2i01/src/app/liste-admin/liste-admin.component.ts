import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Administrateur } from '../administrateur';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.css']
})
export class ListeAdminComponent implements OnInit {
  tabAdmin: Array<Administrateur>;
  isVisibleAdmin: Boolean = false;
  adminNom: String;
  adminNbRole: number;

  constructor() {}
  ngOnInit() {
    this.tabAdmin = new Array<Administrateur>();
    this.tabAdmin.push(new Administrateur('Christopher', 26));
    this.tabAdmin.push(new Administrateur('Claire', 14));
    this.tabAdmin.push(new Administrateur('Juliette', 20));
    this.tabAdmin.push(new Administrateur('Frederic', 42));
    this.isVisibleAdmin = false;
  }

  visible(id) {
      this.isVisibleAdmin = true;
      this.adminNom = this.tabAdmin[id].nom;
      this.adminNbRole = this.tabAdmin[id].nbRole;
  }

}
