import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PronoDialogComponent } from './../prono-dialog/prono-dialog.component';
import { AuthService } from '../auth.service';

import { API_URL } from './../const/constants';

import { Pronostic } from '../models/pronostic';

@Component({
  selector: 'app-prono-form',
  templateUrl: './prono-form-result.component.html',
  styleUrls: ['./prono-form-result.component.css']
})
export class PronoFormResultComponent implements OnInit {

  title = 'app';
  matchday;
  games: GameResult[];
  form: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder,
     private router: Router, public dialog: MatDialog,private auth: AuthService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      m1: new FormControl(''),
      m2: new FormControl(''),
      m3: new FormControl(''),
      m4: new FormControl(''),
      m5: new FormControl(''),
      m6: new FormControl(''),
      m7: new FormControl(''),
      m8: new FormControl(''),
      m9: new FormControl(''),
      m10: new FormControl(''),
      matchday: 0
    });

    this.http.get(API_URL.concat('fixtures/current/'))
    .toPromise().then(data => {
        //this.matchday = Number(data);
        this.matchday = 38;
        this.form.controls['matchday'].setValue(this.matchday);

        this.http.get(API_URL.concat('matchday/').concat(this.matchday))
        .toPromise().then(data => {
            this.games = [];
            for (let i = 1; i < 11; i ++) {
              const game: GameResult = {
                dom: data['m'.concat(i.toString()).concat('Home')],
                ext: data['m'.concat(i.toString()).concat('Away')],
                id: i,
                result: data['m'.concat(i.toString()).concat('Result')]
              };
              this.games.push(game);
            }
          }
        );
      }
    );
  }

  saveResult() {
    this.form.setValue
    this.http.post(API_URL.concat('matchday'), this.form.value)
    .toPromise().then(
      d => {
        this.router.navigate(['/result']); 
      }
    );
  }

}

export class GameResult {
  dom: string;
  ext: string;
  id: number;
  result: string;
}

