import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.url;

  constructor(private http: HttpClient) { }

  login(username: string, contrasena: string) {    
    return this.http.post(this.url + '/login', {
      usuario: username, 
      contras: contrasena
    });    
  }

  validarToken(token: String) {
    return this.http.get(this.url+ '/esUsuario?token=' + token);
  }
}
