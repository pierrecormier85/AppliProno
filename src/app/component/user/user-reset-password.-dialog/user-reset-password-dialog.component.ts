import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-user-reset-password-dialog',
  templateUrl: './user-reset-password-dialog.component.html',
  styleUrls: ['./user-reset-password-dialog.component.css']
})
export class UserResetPasswordDialogComponent {

  constructor(public dialogRef: MatDialogRef<UserResetPasswordDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
