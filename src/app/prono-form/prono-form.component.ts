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
  fixtures: string[];
  standing: string[];
  ranking: { [id: string]: any; };
  resultJ1: { [id: string]: any; };
  resultJ2: { [id: string]: any; };
  resultJ3: { [id: string]: any; };
  resultJ4: { [id: string]: any; };
  resultJ5: { [id: string]: any; };
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
      pseudo: ''
    });

    this.http.get('https://api.football-data.org/v1/competitions/450/leagueTable?matchday='.concat(this.matchday.toString()), {
      headers: new HttpHeaders().set('X-Auth-Token', 'b9b7c8fffa97477f94a375fe50d6ff0a'),
    }).toPromise().then(data => {
      // Read the result field from the JSON response.
      this.standing = data['standing'];
      this.ranking = {};
      for (let i = 0; i < this.standing.length; i ++) {
        const rank = this.standing[i];
        const teamName = rank['teamName'];
        const position = rank['position'];
        this.ranking[teamName] = position;
      }
    }).then(data => {
          this.http.get('https://api.football-data.org/v1/competitions/450/fixtures?matchday='.concat((this.matchday - 1).toString()), {
            headers: new HttpHeaders().set('X-Auth-Token', 'b9b7c8fffa97477f94a375fe50d6ff0a'),
          }).toPromise().then(dataFixtures => {
            // Read the result field from the JSON response.
            this.fixtures = dataFixtures['fixtures'];
            this.resultJ1 = {};
            for (let i = 0; i < this.fixtures.length; i ++) {
              const fixture = this.fixtures[i];
              const dom = fixture['homeTeamName'];
              const ext = fixture['awayTeamName'];
              const result = fixture['result'];
              const goalsHomeTeam = result['goalsHomeTeam'];
              const goalsAwayTeam = result['goalsAwayTeam'];

              if (parseInt(goalsHomeTeam, 10) >  parseInt(goalsAwayTeam, 10)) {
                this.resultJ1[dom] = 'V';
                this.resultJ1[ext] = 'D';
              } else if (parseInt(goalsHomeTeam, 10) <  parseInt(goalsAwayTeam, 10)) {
                this.resultJ1[dom] = 'D';
                this.resultJ1[ext] = 'V';
              } else {
                this.resultJ1[dom] = 'N';
                this.resultJ1[ext] = 'N';
              }
            }
          }).then(data2 => {
            this.http.get('https://api.football-data.org/v1/competitions/450/fixtures?matchday='.concat((this.matchday - 2).toString()), {
              headers: new HttpHeaders().set('X-Auth-Token', 'b9b7c8fffa97477f94a375fe50d6ff0a'),
            }).toPromise().then(dataFixtures => {
              // Read the result field from the JSON response.
              this.fixtures = dataFixtures['fixtures'];
              this.resultJ2 = {};
              for (let i = 0; i < this.fixtures.length; i ++) {
                const fixture = this.fixtures[i];
                const dom = fixture['homeTeamName'];
                const ext = fixture['awayTeamName'];
                const result = fixture['result'];
                const goalsHomeTeam = result['goalsHomeTeam'];
                const goalsAwayTeam = result['goalsAwayTeam'];

                if (parseInt(goalsHomeTeam, 10) >  parseInt(goalsAwayTeam, 10)) {
                  this.resultJ2[dom] = 'V';
                  this.resultJ2[ext] = 'D';
                } else if (parseInt(goalsHomeTeam, 10) <  parseInt(goalsAwayTeam, 10)) {
                  this.resultJ2[dom] = 'D';
                  this.resultJ2[ext] = 'V';
                } else {
                  this.resultJ2[dom] = 'N';
                  this.resultJ2[ext] = 'N';
                }
              }
            }).then(data3 => {
              this.http.get('https://api.football-data.org/v1/competitions/450/fixtures?matchday='.concat((this.matchday - 3).toString()), {
                headers: new HttpHeaders().set('X-Auth-Token', 'b9b7c8fffa97477f94a375fe50d6ff0a'),
              }).toPromise().then(dataFixtures => {
                // Read the result field from the JSON response.
                this.fixtures = dataFixtures['fixtures'];
                this.resultJ3 = {};
                for (let i = 0; i < this.fixtures.length; i ++) {
                  const fixture = this.fixtures[i];
                  const dom = fixture['homeTeamName'];
                  const ext = fixture['awayTeamName'];
                  const result = fixture['result'];
                  const goalsHomeTeam = result['goalsHomeTeam'];
                  const goalsAwayTeam = result['goalsAwayTeam'];

                  if (parseInt(goalsHomeTeam, 10) >  parseInt(goalsAwayTeam, 10)) {
                    this.resultJ3[dom] = 'V';
                    this.resultJ3[ext] = 'D';
                  } else if (parseInt(goalsHomeTeam, 10) <  parseInt(goalsAwayTeam, 10)) {
                    this.resultJ3[dom] = 'D';
                    this.resultJ3[ext] = 'V';
                  } else {
                    this.resultJ3[dom] = 'N';
                    this.resultJ3[ext] = 'N';
                  }
                }
              }).then(data4 => {
                this.http.get('https://api.football-data.org/v1/competitions/450/fixtures?matchday='
                .concat((this.matchday - 4).toString()), {
                  headers: new HttpHeaders().set('X-Auth-Token', 'b9b7c8fffa97477f94a375fe50d6ff0a'),
                }).toPromise().then(dataFixtures => {
                  // Read the result field from the JSON response.
                  this.fixtures = dataFixtures['fixtures'];
                  this.resultJ4 = {};
                  for (let i = 0; i < this.fixtures.length; i ++) {
                    const fixture = this.fixtures[i];
                    const dom = fixture['homeTeamName'];
                    const ext = fixture['awayTeamName'];
                    const result = fixture['result'];
                    const goalsHomeTeam = result['goalsHomeTeam'];
                    const goalsAwayTeam = result['goalsAwayTeam'];

                    if (parseInt(goalsHomeTeam, 10) >  parseInt(goalsAwayTeam, 10)) {
                      this.resultJ4[dom] = 'V';
                      this.resultJ4[ext] = 'D';
                    } else if (parseInt(goalsHomeTeam, 10) <  parseInt(goalsAwayTeam, 10)) {
                      this.resultJ4[dom] = 'D';
                      this.resultJ4[ext] = 'V';
                    } else {
                      this.resultJ4[dom] = 'N';
                      this.resultJ4[ext] = 'N';
                    }
                  }
                }).then(data5 => {
                  this.http.get('https://api.football-data.org/v1/competitions/450/fixtures?matchday='
                  .concat((this.matchday - 5).toString()), {
                    headers: new HttpHeaders().set('X-Auth-Token', 'b9b7c8fffa97477f94a375fe50d6ff0a'),
                  }).toPromise().then(dataFixtures => {
                    // Read the result field from the JSON response.
                    this.fixtures = dataFixtures['fixtures'];
                    this.resultJ5 = {};
                    for (let i = 0; i < this.fixtures.length; i ++) {
                      const fixture = this.fixtures[i];
                      const dom = fixture['homeTeamName'];
                      const ext = fixture['awayTeamName'];
                      const result = fixture['result'];
                      const goalsHomeTeam = result['goalsHomeTeam'];
                      const goalsAwayTeam = result['goalsAwayTeam'];

                      if (parseInt(goalsHomeTeam, 10) >  parseInt(goalsAwayTeam, 10)) {
                        this.resultJ5[dom] = 'V';
                        this.resultJ5[ext] = 'D';
                      } else if (parseInt(goalsHomeTeam, 10) <  parseInt(goalsAwayTeam, 10)) {
                        this.resultJ5[dom] = 'D';
                        this.resultJ5[ext] = 'V';
                      } else {
                        this.resultJ5[dom] = 'N';
                        this.resultJ5[ext] = 'N';
                      }
                    }
                  }).then(data6 => {
                    this.http.get('https://api.football-data.org/v1/competitions/450/fixtures?matchday='.concat(this.matchday.toString()), {
                      headers: new HttpHeaders().set('X-Auth-Token', 'b9b7c8fffa97477f94a375fe50d6ff0a'),
                    }).toPromise().then(dataF => {
                      // Read the result field from the JSON response.
                      this.fixtures = dataF['fixtures'];
                      this.games = [];
                      for (let i = 0; i < this.fixtures.length; i ++) {
                        const fixture = this.fixtures[i];
                        const dom = fixture['homeTeamName'];
                        const ext = fixture['awayTeamName'];
                        const game: Game = {
                          dom: dom,
                          ext: ext,
                          id: i,
                          result: '',
                          rankingDom: this.ranking[dom],
                          rankingExt: this.ranking[ext],
                          resultHomeTeamJ1: this.resultJ1[dom],
                          resultAwayTeamJ1: this.resultJ1[ext],
                          resultHomeTeamJ2: this.resultJ2[dom],
                          resultAwayTeamJ2: this.resultJ2[ext],
                          resultHomeTeamJ3: this.resultJ3[dom],
                          resultAwayTeamJ3: this.resultJ3[ext],
                          resultHomeTeamJ4: this.resultJ4[dom],
                          resultAwayTeamJ4: this.resultJ4[ext],
                          resultHomeTeamJ5: this.resultJ5[dom],
                          resultAwayTeamJ5: this.resultJ5[ext],
                        };
                        this.games.push(game);
                      }
                    });
                  });
                });
              });
            });
          });
        }
      );
  }

  saveProno() {
    console.log(this.form.value.pseudo);
  }

}
