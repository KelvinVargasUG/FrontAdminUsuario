import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../Services/Auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthRolGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRole: string = route.data['requiredRole'];
    const userRol = this.authService.getUser();
    if (this.authService.isLoggedIn() && userRol.rol === requiredRole) {
      return true;
    }

    alert("No tiene permiso para esta página");
    this.router.navigate(['login']);
    return false;

  }

}
