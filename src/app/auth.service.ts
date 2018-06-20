import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private myRoute: Router) { }

  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", btoa(token));
  }

  getToken() {
    return localStorage.getItem("LoggedInUser");
  }

  getDecodeToken() {
    return atob(localStorage.getItem("LoggedInUser"));
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate([""]);
  }

  isAdmin(){
    return this.getToken() !== null && this.getDecodeToken() == "ol44470";
  }


}
