import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EsUsuarioGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('token');

      return new Promise((resolve, reject) => {
        if(token) {
          this.auth.validarToken(token)
          .subscribe((resp: any) => {

            if(resp.ok) {              
              return resolve(true);
            } else {
              this.router.navigate(['/login']);
              return resolve(false);
            }
  
          });
  
        } else {
          this.router.navigate(['/login']);
          return resolve(false);
  
        }

      });

    
  }
  
}
