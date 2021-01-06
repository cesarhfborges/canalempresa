import { Injectable } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkURl(state);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkURl(state);
  }

  private checkURl(state: RouterStateSnapshot): boolean {
    if (state.url === '/error') {
      return true;
    } else if (this.authService.isAuthenticated()) {
      if (['/login'].includes(state.url)) {
        this.router.navigate(['/home']);
        return false;
      }
      return true;
    } else {
      if (!['/login'].includes(state.url)) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
  }
}
