import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://up-articulos.herokuapp.com';

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
