import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../const/constants';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  pseudoAlreadyUse: Boolean = false;
  
  constructor(private fb: FormBuilder, private http: HttpClient,private myRoute: Router, private auth: AuthService,) {
    this.form = fb.group({
      pseudo: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }

  register() {
    if (this.form.valid && this.passwordMatch()) {
     this.http.post(API_URL.concat('user/new/'),this.form.value)
        .toPromise().then(response => {
            this.auth.sendToken(this.form.value.pseudo)
            this.myRoute.navigate([""]);
          }, error => {
            if(error.status == 409){
              this.pseudoAlreadyUse = true;
            }
          }
        );
    }
  }

  ngOnInit() {
  }

  getErrorEmailMessage() {
    return this.form.controls['email'].hasError('pattern') ? 'Le mail entré n\'est pas valide' : '';
   }

   passwordMatch(){
    let match = false;
    if(this.form.controls['password'].value === this.form.controls['password2'].value){
      match = true;
    }
    return match;
   }

}
