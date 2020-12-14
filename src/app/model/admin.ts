import {Fonction} from './fonction.enum';
import {Departement} from './departement.enum';
import {Ville} from './ville.enum';

export class Admin {
  identifiant : string;
  nom : string;
  prenom : string;
  mail : string;
  password : string;
  fonction : Fonction;
  département : Departement;
  adresse : string;
  ville : Ville;
  photo : string;
  about : string;

  constructor(identifiant?: string, nom?: string, prenom?: string, mail?: string, password?: string,
              fonction?: Fonction, département?: Departement, adresse?: string, ville?: Ville,
              photo?: string, about?: string) {
    this.identifiant = identifiant;
    this.nom = nom;
    this.prenom = prenom;
    this.mail = mail;
    this.password = password;
    this.fonction = fonction;
    this.département = département;
    this.adresse = adresse;
    this.ville = ville;
    this.photo = photo;
    this.about = about;
  }
}
