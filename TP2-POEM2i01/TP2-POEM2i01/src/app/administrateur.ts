import { Personne } from './personne';

export class Administrateur extends Personne {
    public nbRole: number;
    constructor(nom: string, nbRole: number) {
        super(nom);
        this.nbRole = nbRole;
    }
}

