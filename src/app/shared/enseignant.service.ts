import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Enseignant} from '../model/enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private getAllEnseignantssUrl = 'http://localhost:3000/enseignants';
  private deleteEnseignantUrl = 'http://localhost:3000/enseignants/';
  private addEnseignantUrl = 'http://localhost:3000/enseignants';

  constructor(private http:HttpClient) { }

  getAllEnseignants(){
    return this.http.get<any>(this.getAllEnseignantssUrl);
  }

  deleteEnseignant(identifiant: number) {
      return this.http.delete<any>(this.deleteEnseignantUrl + identifiant)
  }

  addEnseignant(enseignant : Enseignant) {
    return this.http.post<any>(this.addEnseignantUrl, enseignant);
  }
}
