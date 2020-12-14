import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Admin} from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:8000/auth/login';

  constructor(private http:HttpClient) { }

  // Authentification
  loginAdmin(admin:Admin){
    return this.http.post<any>(this.loginUrl,admin);
  }

  isLoggedIn(){
    let token = localStorage.getItem('myToken');
    return !!token;
  }
}
