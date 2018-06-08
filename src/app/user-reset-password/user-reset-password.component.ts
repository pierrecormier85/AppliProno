import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../const/constants';
import { UserResetPasswordDialogComponent } from '../user-reset-password.-dialog/user-reset-password-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-user-reset-password',
  templateUrl: './user-reset-password.component.html',
  styleUrls: ['./user-reset-password.component.css']
})
export class UserResetPasswordComponent implements OnInit {

  form;

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient, 
    public dialog: MatDialog) {
    this.form = fb.group({
      pseudo: ['', [Validators.required]]
    });
  }
  
  ngOnInit() {
  }

  resetPassword() {
    if (this.form.valid) {
      this.http.post(API_URL.concat('user/password'),this.form.value.pseudo)
      .toPromise().then(response => {
        this.router.navigate(['/']); 
        this.openDialog();
      }
     );
    }
    
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(UserResetPasswordDialogComponent, {
      width: '250px'
    });
  }
}
