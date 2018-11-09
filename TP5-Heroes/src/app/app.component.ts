import { Component } from '@angular/core';


@Component({
  
selector: 'app-root',
  template: `
  <div class="container">
    <h1>Reactive Forms</h1>
    <hero-list></hero-list>
  </div>`,
  
styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Bienvenue tout le monde premier jour de cours';
}
