import {Fonction} from './fonction.enum';
import {Departement} from './departement.enum';
import {Ville} from './ville.enum';
import {Modules} from './modules.enum';

export class Enseignant {
  id: number;
  identifiant : string;
  nom : string;
  prenom : string;
  mail : string;
  password : string;
  departement : Departement;
  adresse : string;
  ville : Ville;
  photo : string;
  about : string;
  modulesEnseignes : Modules[];
  cv : string;

  constructor(id?: number, identifiant?: string, nom?: string, prenom?: string, mail?: string, password?: string, departement?: Departement, adresse?: string, ville?: Ville, photo?: string, about?: string, modulesEnseignes?: Modules[], cv?: string) {
    this.id = id;
    this.identifiant = identifiant;
    this.nom = nom;
    this.prenom = prenom;
    this.mail = mail;
    this.password = password;
    this.departement = departement;
    this.adresse = adresse;
    this.ville = ville;
    this.photo = photo;
    this.about = about;
    this.modulesEnseignes = modulesEnseignes;
    this.cv = cv;
  }
}
