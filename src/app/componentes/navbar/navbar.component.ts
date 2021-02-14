import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public username: string;
  public role: string;
  public isUser: boolean = false;

  constructor(private router: Router) { 
    
  }
  
  ngOnInit(): void {
    const username = localStorage.getItem('usuario');
    const role = localStorage.getItem('role');
  
    if(username && role) {
      this.username = username;
      this.role = role;
      this.isUser = true;
    }
    
  }

  salir() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('role');
    this.username = null;
    this.role = null;
    this.isUser = false;

    this.router.navigateByUrl('/');
  }

}
