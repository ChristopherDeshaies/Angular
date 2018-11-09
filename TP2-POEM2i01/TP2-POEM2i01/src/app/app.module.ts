import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ComptdetailadminComponentComponent } from './comptdetailadmin-component/comptdetailadmin-component.component';
import { PresentationComponentComponent } from './presentation-component/presentation-component.component';
import { VisibleAdminComponent } from './visible-admin/visible-admin.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    ComptdetailadminComponentComponent,
    PresentationComponentComponent,
    VisibleAdminComponent,
    ListeAdminComponent,
    ListUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
