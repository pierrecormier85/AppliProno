import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { API_URL } from '../const/constants';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  authenticationFlag: boolean = true;

  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private auth: AuthService,
    private http: HttpClient) {
    this.form = fb.group({
      pseudo: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }
  
  ngOnInit() {
  }

  login() {
    if (this.form.valid) {
      this.http.post(API_URL.concat('user/'),this.form.value)
       .toPromise().then(response => {
          this.auth.sendToken(this.form.value.pseudo)
          this.myRoute.navigate([""]);
        }, error => {
          this.authenticationFlag = false;
        }
      );
    } else {
      this.authenticationFlag = false;
    }
  }
}