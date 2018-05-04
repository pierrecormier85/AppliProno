import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PronoDialogComponent } from './../prono-dialog/prono-dialog.component';
import { AuthService } from '../auth.service';

import { API_URL } from './../const/constants';

import {Game} from './../models/game';
import { Pronostic } from '../models/pronostic';

@Component({
  selector: 'app-prono-form',
  templateUrl: './prono-form.component.html',
  styleUrls: ['./prono-form.component.css']
})
export class PronoFormComponent implements OnInit {

  title = 'app';
  matchday;
  games: Game[];
  form: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder,
     private router: Router, public dialog: MatDialog,private auth: AuthService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      m1: new FormControl('', Validators.required),
      m2: new FormControl('', Validators.required),
      m3: new FormControl('', Validators.required),
      m4: new FormControl('', Validators.required),
      m5: new FormControl('', Validators.required),
      m6: new FormControl('', Validators.required),
      m7: new FormControl('', Validators.required),
      m8: new FormControl('', Validators.required),
      m9: new FormControl('', Validators.required),
      m10: new FormControl('', Validators.required),
      pseudo: new FormControl('', Validators.required),
      matchday: 0
    });

    this.http.get(API_URL.concat('fixtures/current/'))
    .toPromise().then(data => {
        this.matchday = Number(data);
        this.form.controls['matchday'].setValue(this.matchday);

        if(this.auth.isLoggednIn){
          let pseudo = this.auth.getToken();
          this.form.controls['pseudo'].setValue(pseudo);
          //get prono if already done
          this.http.get<Pronostic>(API_URL.concat('pronostic/get/').concat(this.matchday).concat('&').concat(pseudo))
          .toPromise().then(data => {
              // Read the result field from the JSON response.
              this.form.controls['m1'].setValue(data.m1);
              this.form.controls['m2'].setValue(data.m2);
              this.form.controls['m3'].setValue(data.m3);
              this.form.controls['m4'].setValue(data.m4);
              this.form.controls['m5'].setValue(data.m5);
              this.form.controls['m6'].setValue(data.m6);
              this.form.controls['m7'].setValue(data.m7);
              this.form.controls['m8'].setValue(data.m8);
              this.form.controls['m9'].setValue(data.m9);
              this.form.controls['m10'].setValue(data.m10);
            }, error => {
              //pas de prono enregistré donc on fais rien
            }
          );
        }
      }
    );

    this.http.get(API_URL.concat('fixtures/'))
    .toPromise().then(data => {
        // Read the result field from the JSON response.
        this.games = [];
        for (let i = 1; i < 11; i ++) {
          const fixture = data[i-1];
          const game: Game = {
            dom: fixture['home'],
            ext: fixture['away'],
            id: i,
            result: '',
            rankingDom: fixture['rankingHome'],
            rankingExt: fixture['rankingAway'],
            resultHomeTeamJ1: fixture['previousResultHome'][0],
            resultAwayTeamJ1: fixture['previousResultAway'][0],
            resultHomeTeamJ2: fixture['previousResultHome'][1],
            resultAwayTeamJ2: fixture['previousResultAway'][1],
            resultHomeTeamJ3: fixture['previousResultHome'][2],
            resultAwayTeamJ3: fixture['previousResultAway'][2],
            resultHomeTeamJ4: fixture['previousResultHome'][3],
            resultAwayTeamJ4: fixture['previousResultAway'][3],
            resultHomeTeamJ5: fixture['previousResultHome'][4],
            resultAwayTeamJ5: fixture['previousResultAway'][4],
          };
          this.games.push(game);
        }
      }
    );
  }

  get pseudo() { return this.form.get('pseudo'); }


  getClassForResult(value){
    if(value == 'V'){
      return 'badge badge-pill badge-success';
    } else if(value == 'N'){
      return 'badge badge-pill badge-warning';
    } else {
      return 'badge badge-pill badge-danger';
    }
    
  }

  saveProno() {
    this.form.setValue
    this.http.post(API_URL.concat('pronostic'), this.form.value)
    .toPromise().then(
      d => {
        this.router.navigate(['/pronostics']); 
        this.openDialog();
      }
    );
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PronoDialogComponent, {
      width: '250px'
    });
  }

}

