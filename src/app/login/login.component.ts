import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  public loading = false;

  constructor( private auth: AuthService, private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.formLogin = this.formBuilder.group({
      username: '',
      contrasena: ''
    });
  }

  ingresar() {
    let username = this.formLogin.value.username;
    let contrasena = this.formLogin.value.contrasena;

    this.loading = true;
    this.auth.login(username, contrasena)
    .subscribe((resp: any) => {
      this.loading = false;
      if(resp.ok) {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', resp.decoded.usuario);
        localStorage.setItem('role', resp.decoded.role);
        location.href = '/';        
      }
    });
  }

}
