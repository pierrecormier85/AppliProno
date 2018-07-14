import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PronoDialogComponent } from './../../bet/prono-dialog/prono-dialog.component';
import { AuthService } from '../../../auth.service';

import {CalendarModule} from 'primeng/calendar';

import { Pronostic } from '../../../models/pronostic';
import { environment } from '../../../../environments/environment';

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
  fr: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder,
     private router: Router, public dialog: MatDialog,private auth: AuthService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      m1Result: new FormControl(''),
      m2Result: new FormControl(''),
      m3Result: new FormControl(''),
      m4Result: new FormControl(''),
      m5Result: new FormControl(''),
      m6Result: new FormControl(''),
      m7Result: new FormControl(''),
      m8Result: new FormControl(''),
      m9Result: new FormControl(''),
      m10Result: new FormControl(''),
      m1Date: new FormControl(''),
      m2Date: new FormControl(''),
      m3Date: new FormControl(''),
      m4Date: new FormControl(''),
      m5Date: new FormControl(''),
      m6Date: new FormControl(''),
      m7Date: new FormControl(''),
      m8Date: new FormControl(''),
      m9Date: new FormControl(''),
      m10Date: new FormControl(''),
      matchday: 0
    });

    this.fr = {
      firstDayOfWeek: 1,
      dayNames: [ "Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi" ],
      dayNamesShort: [ "dim","lun","mar","mer","jeu","ven","sam" ],
      dayNamesMin: [ "D","L","M","M","J","V","S" ],
      monthNames: [ "Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre" ],
      monthNamesShort: [ "jan","fev","mar","avr","mai","jun","jui","aou","sep","oct","nov","dec" ],
      today: 'Aujourd\'hui',
      clear: 'Effacer'
    }

    this.http.get(environment.apiUrl.concat('fixtures/current/'))
    .toPromise().then(data => {
        this.matchday = Number(data);
        this.form.controls['matchday'].setValue(this.matchday);

        this.http.get(environment.apiUrl.concat('matchday/').concat(this.matchday))
        .toPromise().then(data => {
            this.games = [];
            for (let i = 1; i < 11; i ++) {
              const game: GameResult = {
                dom: data['m'.concat(i.toString()).concat('Home')],
                ext: data['m'.concat(i.toString()).concat('Away')],
                id: i,
                result: data['m'.concat(i.toString()).concat('Result')],
                date: data['m'.concat(i.toString()).concat('Date')]
              };
              this.games.push(game);

              let result = data['m'.concat(i.toString()).concat('Result')];
              if(result != null){
                this.form.controls['m'.concat(i.toString()).concat('Result')].setValue(result);
              }

              let date = data['m'.concat(i.toString()).concat('Date')];
              if(date != null){
                this.form.controls['m'.concat(i.toString()).concat('Date')].setValue(new Date(date));
              }
            }
            this.games.sort((a, b) => a.date - b.date);
          }
        );
      }
    );
  }

  saveResult() {
    this.form.setValue;
    
    this.http.post(environment.apiUrl.concat('matchday'), this.form.value)
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
  date:number;
}

