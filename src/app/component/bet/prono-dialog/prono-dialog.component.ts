import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-prono-dialog',
  templateUrl: './prono-dialog.component.html',
  styleUrls: ['./prono-dialog.component.css']
})
export class PronoDialogComponent {

  constructor(public dialogRef: MatDialogRef<PronoDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
