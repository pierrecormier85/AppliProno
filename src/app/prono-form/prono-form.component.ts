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
  matchday = 16;
  games: Game[];
  form: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      m0: '',
      m1: '',
      m2: '',
      m3: '',
      m4: '',
      m5: '',
      m6: '',
      m7: '',
      m8: '',
      m9: '',
      pseudo: '',
      matchday: this.matchday
    });

    this.http.get('https://pronorest.herokuapp.com/api/fixtures/'.concat(this.matchday.toString()))
    .toPromise().then(data => {
        // Read the result field from the JSON response.
        this.games = [];
        for (let i = 0; i < 10; i ++) {
          const fixture = data[i];
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

  saveProno() {

    this.http.post('http://localhost:8080/PronoRest/api/pronostic', this.form.value)
    .toPromise();
  }

}
