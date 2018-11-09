export class Personne {
private Nom : string;
private Prenom : string;
static TabPersonne : Array<Personne> = new Array<Personne>();

constructor () {
	this.Nom ="";
	this.Prenom = "";
}

public setNom(pNom : string) {
   this.Nom = pNom;
}

public getNom() {
	return this.Nom;
}

public setPrenom(pPrenom : string) {
	this.Nom = pPrenom;
 }
 
 public getPrenom() {
	 return this.Prenom;
 }

public ajout(unePersonne : Personne)
{
 Personne.TabPersonne.push(unePersonne);	
}


}
