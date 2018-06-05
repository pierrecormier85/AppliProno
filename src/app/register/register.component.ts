import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../const/constants';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;
  
  constructor(private fb: FormBuilder, private http: HttpClient,private myRoute: Router, private auth: AuthService,) {
    this.form = fb.group({
      pseudo: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    console.log(this.form.value);
    this.http.post(API_URL.concat('user/new/'),this.form.value)
       .toPromise().then(response => {
          this.auth.sendToken(this.form.value.pseudo)
          this.myRoute.navigate([""]);
        }
      );
  }

  ngOnInit() {
  }

}
