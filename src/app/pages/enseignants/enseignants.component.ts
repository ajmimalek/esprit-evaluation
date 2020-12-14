import {Component, OnInit} from '@angular/core';
import {Enseignant} from '../../model/enseignant';
import {EnseignantService} from '../../shared/enseignant.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-enseignants',
  templateUrl: 'enseignants.component.html'
})
export class EnseignantsComponent implements OnInit {
  enseignant: Enseignant;
  enseignantList = [];
  constructor(private enseignantService:EnseignantService,
              private toast:ToastrService) {
  }

  ngOnInit() {
    this.enseignantService.getAllEnseignants().subscribe(
      result=>{
        this.enseignantList = result
      },
      error=>{
        console.log(error);
        this.toast.error('Erreur lors de l importation des enseignants','Erreur');
      })
  }

  delete(enseignant: Enseignant) {
    let index = this.enseignantList.indexOf(enseignant);
    this.enseignantList.splice(index, 1);

    this.enseignantService.deleteEnseignant(enseignant.id).subscribe(
      res=>{
        this.toast.success('Enseignant supprimé avec succés');
      },
      err =>{
        console.log(err);
      }
    )
  }
}
