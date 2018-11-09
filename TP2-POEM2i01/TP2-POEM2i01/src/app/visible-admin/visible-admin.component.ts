import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visible-admin',
  templateUrl: './visible-admin.component.html',
  styleUrls: ['./visible-admin.component.css']
})
export class VisibleAdminComponent implements OnInit {

  isVisibleListeAdmin: Boolean = false;
  constructor() { }

  ngOnInit() {
    this.isVisibleListeAdmin = false;
  }

  visible() {
    if (this.isVisibleListeAdmin) {
      this.isVisibleListeAdmin = false;
    } else {
      this.isVisibleListeAdmin = true;
    }
  }

}
