import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../const/constants';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  form;
  
  constructor(private fb: FormBuilder, private http: HttpClient,private myRoute: Router, private auth: AuthService,) {
   /* this.form = fb.group({
      pseudo: [this.auth.getDecodeToken(), Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: [''],
      password2: ['']
    });*/
    this.form = new FormGroup({
      pseudo: new FormControl({value: this.auth.getDecodeToken(), disabled: true}, Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]),
      password: new FormControl(''),
      password2: new FormControl('')
    });
  }

  register() {
    this.http.post(API_URL.concat('user/update/'),this.form.value)
       .toPromise().then(response => {
          this.myRoute.navigate([""]);
        }
      );
  }

  ngOnInit() {
    this.http.post(API_URL.concat('user/'),this.form.value)
      .toPromise().then(response => {
          this.form.controls['email'].setValue(response['email']);
          console.log(response);
        }
      );
  }

  getErrorEmailMessage() {
    return this.form.controls['email'].hasError('pattern') ? 'Le mail entré n\'est pas valide' : '';
  }

  passwordMatch(){
    let match = false;
    console.log(this.form.controls['password'].value);
    if(this.form.controls['password'].value === this.form.controls['password2'].value){
      match = true;
    }
    return match;
  }

}