import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../component/user/login/login.component';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
    private myRoute: Router){
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggednIn()){
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  }
}