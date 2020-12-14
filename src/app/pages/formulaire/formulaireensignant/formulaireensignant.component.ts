import { Component, OnInit } from '@angular/core';
import {Ville} from '../../../model/ville.enum';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EnseignantService} from '../../../shared/enseignant.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Enseignant} from '../../../model/enseignant';

@Component({
  selector: 'app-formulaireensignant',
  templateUrl: './formulaireensignant.component.html',
  styleUrls: ['./formulaireensignant.component.scss']
})
export class FormulaireensignantComponent implements OnInit {
  villes: Ville;
  private addEnseignantForm: FormGroup;

  constructor(    private fb: FormBuilder,
                  private enseignantService:EnseignantService,
                  private router:Router,
                  private toastr: ToastrService) {
    let formControls = {
      firstname: new FormControl('',[
        Validators.required,
        Validators.pattern('[A-Za-z .\'-]+'),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.pattern('[A-Za-z .\'-]+'),
        Validators.minLength(2)
      ]),
      identifiant: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.minLength(2)
      ]),
      password: new FormControl('',[
        Validators.required
      ]),
    }
    this.addEnseignantForm = this.fb.group(formControls)
  }

  get firstname() { return this.addEnseignantForm.get('firstname') }
  get lastname() { return this.addEnseignantForm.get('lastname') }
  get identifiant() { return this.addEnseignantForm.get('identifiant') }
  get email() { return this.addEnseignantForm.get('email') }
  get password() { return this.addEnseignantForm.get('password') }

  ngOnInit(): void {
    console.log(this.villes);

  }

  addEnseignant() {
    let data = this.addEnseignantForm.value;
    let enseignant = new Enseignant(null,data.identifiant,data.firstname,data.lastname,data.email,data.password,null,null,null,null,null,null,null);
    this.enseignantService.addEnseignant(enseignant).subscribe(
      res=>{
        this.toastr.success(res.message);
        this.router.navigate(['/enseignants']);
      },
      err=>{
        console.log(err);
      }
    )

  }
}
