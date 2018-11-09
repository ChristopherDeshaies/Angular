import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comptdetailadmin-component',
  templateUrl: './comptdetailadmin-component.component.html',
  styleUrls: ['./comptdetailadmin-component.component.css']
})
export class ComptdetailadminComponentComponent implements OnInit {

  @Input() nom: String;
  @Input() nbRole: number;

  constructor() { }

  ngOnInit() {
  }

}
