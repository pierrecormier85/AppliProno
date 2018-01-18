import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

import {Game} from './../game/game';

@Component({
  selector: 'app-prono-form',
  templateUrl: './prono-form.component.html',
  styleUrls: ['./prono-form.component.css']
})
export class PronoFormComponent implements OnInit {

  title = 'app';
  matchday = 20;
  games: Game[];
  form: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/fixtures/current/')
    .toPromise().then(data => {
        this.matchday = Number(data);
        this.form = this.formBuilder.group({
          m1: '',
          m2: '',
          m3: '',
          m4: '',
          m5: '',
          m6: '',
          m7: '',
          m8: '',
          m9: '',
          m10: '',
          pseudo: '',
          matchday: this.matchday
        });
      }
    );

this.http.get('http://localhost:8080/api/fixtures/')
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

    this.http.get('http://localhost:8080/api/fixtures/')
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

    this.http.post('http://localhost:8080/api/pronostic', this.form.value)
    .toPromise();
  }

}
