import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../shared/login.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Admin} from '../../model/admin';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role: string;

  constructor(
    private loginService:LoginService,
    private router:Router,
    private toast:ToastrService
  ) {
  }
  ngOnInit(): void {
    let isLoggedIn = this.loginService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  login(loginForm: NgForm){
    let data = loginForm.value;
    let admin = new Admin(data.id,null,null,null,data.password,null,null,null,null,null,null);
    this.loginService.loginAdmin(admin).subscribe(
      (res : any)=>{
        if (loginForm.value.id.startsWith('E')){
          this.role = 'Enseignant';
        } else if (loginForm.value.id.startsWith('A')){
          this.role = 'Admin';
        }
        this.toast.success('Identifié en tant que '+this.role,'Connexion réussi');
        console.log(res);
        let token = res.access_token;
        localStorage.setItem('myToken',token);
        this.router.navigate(['/dashboard']);
      },error => {
        console.log(error);
        this.toast.error('Veuillez mentionner votre username et votre mot de passe','Username et/ou Mot de passe manquant');
      }
    )
  }
}
