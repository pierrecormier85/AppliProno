import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PronoDialogComponent } from '../prono-dialog/prono-dialog.component';
import { AuthService } from '../../../auth.service';

import {Game} from '../../../models/game';
import { Pronostic } from '../../../models/pronostic';
import { environment } from '../../../../environments/environment';

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
  errorFlag: Boolean;
  conflictFlag: Boolean;
  disable: Boolean = false;
  disableM1: Boolean = false;
  disableM2: Boolean = false;
  disableM3: Boolean = false;
  disableM4: Boolean = false;
  disableM5: Boolean = false;
  disableM6: Boolean = false;
  disableM7: Boolean = false;
  disableM8: Boolean = false;
  disableM9: Boolean = false;
  disableM10: Boolean = false;
  showWarningMessage: Boolean = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder,
     private router: Router, public dialog: MatDialog,private auth: AuthService) {
       this.errorFlag = false;
     }

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

    this.http.get(environment.apiUrl.concat('fixtures/current/'))
    .toPromise().then(data => {
        this.matchday = Number(data);
        this.form.controls['matchday'].setValue(this.matchday);

        if(this.auth.isLoggednIn()){
          let pseudo = this.auth.getDecodeToken();
          this.disable = true;
          this.form.controls['pseudo'].setValue(pseudo);
          //get prono if already done
          this.http.get<Pronostic>(environment.apiUrl.concat('pronostic/get/').concat(this.matchday).concat('&').concat(pseudo))
          .toPromise().then(data => {
              if(data != null){
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
              }
            }, error => {
              //pas de prono enregistré donc on fais rien
            }
          );
        }else {
          this.form.controls['pseudo'].enable();
        }
      
        this.http.get(environment.apiUrl.concat('matchday/').concat(this.matchday))
        .toPromise().then(data => {
            let today = Date.now();
            if(today >= data['m1Date']){
              this.disableM1 = true;
              this.form.controls['m1'].setValidators(null);
              this.showWarningMessage = true;
            }
            if(today >= data['m2Date']){
              this.disableM2 = true;
              this.form.controls['m2'].setValidators(null);
              this.showWarningMessage = true;
            }
            if(today >= data['m3Date']){
              this.disableM3 = true;
              this.form.controls['m3'].setValidators(null);
              this.showWarningMessage = true;
            }
            if(today >= data['m4Date']){
              this.disableM4 = true;
              this.form.controls['m4'].setValidators(null);
              this.showWarningMessage = true;
            }
            if(today >= data['m5Date']){
              this.disableM5 = true;
              this.form.controls['m5'].setValidators(null);
              this.showWarningMessage = true;
            }
            if(today >= data['m6Date']){
              this.disableM6 = true;
              this.form.controls['m6'].setValidators(null);
              this.showWarningMessage = true;
            }
            if(today >= data['m7Date']){
              this.disableM7 = true;
              this.form.controls['m7'].setValidators(null);
              this.showWarningMessage = true;
            }
            if(today >= data['m8Date']){
              this.disableM8 = true;
              this.form.controls['m8'].setValidators(null);
              this.showWarningMessage = true;
            }
            if(today >= data['m9Date']){
              this.disableM9 = true;
              this.form.controls['m9'].setValidators(null);
              this.showWarningMessage = true;
            }
            if(today >= data['m10Date']){
              this.disableM10 = true;
              this.form.controls['m10'].setValidators(null);
              this.showWarningMessage = true;
            }
          });
      }
    );

    this.http.get("./assets/json/l1.json").toPromise().then(data => {
      let teams:{ [name: string]: Team }={};
      
      for (let index in data) {
        let jsonTeam = data[index];
        let team = new Team();
        team.logo = jsonTeam['logo'];
        team.display = jsonTeam['display'];

        teams[jsonTeam['name']] = team;
      }

      this.http.get(environment.apiUrl.concat('fixtures'))
      .toPromise().then(data => {
          // Read the result field from the JSON response.
          this.games = [];
          for (let i = 1; i < 11; i ++) {
            const fixture = data[i-1];

            const game = new Game();
            game.dom = teams[fixture['home']].display;
            game.logoDom = teams[fixture['home']].logo;
            game.ext = teams[fixture['away']].display;
            game.logoExt = teams[fixture['away']].logo;
            game.id = i;
            game.result = '';
            game.rankingDom = fixture['rankingHome'];
            game.rankingExt = fixture['rankingAway'];
            game.date = fixture['date'];

            if(fixture['previousResultHome'] != null){
              if(fixture['previousResultHome'].length >= 1){
                game.resultHomeTeamJ1 = fixture['previousResultHome'][0];
              }

              if(fixture['previousResultHome'].length >= 2){
                game.resultHomeTeamJ2 = fixture['previousResultHome'][1];
              }

              if(fixture['previousResultHome'].length >= 3){
                game.resultHomeTeamJ3 = fixture['previousResultHome'][2];
              }

              if(fixture['previousResultHome'].length >= 4){
                game.resultHomeTeamJ4 = fixture['previousResultHome'][3];
              }

              if(fixture['previousResultHome'].length >= 5){
                game.resultHomeTeamJ5 = fixture['previousResultHome'][4];
              }
            }

            if(fixture['previousResultAway'] != null){
              if(fixture['previousResultAway'].length >= 1){
                game.resultAwayTeamJ1 = fixture['previousResultAway'][0];
              }

              if(fixture['previousResultAway'].length >= 2){
                game.resultAwayTeamJ2 = fixture['previousResultAway'][1];
              }

              if(fixture['previousResultAway'].length >= 3){
                game.resultAwayTeamJ3 = fixture['previousResultAway'][2];
              }

              if(fixture['previousResultAway'].length >= 4){
                game.resultAwayTeamJ4 = fixture['previousResultAway'][3];
              }

              if(fixture['previousResultAway'].length >= 5){
                game.resultAwayTeamJ5 = fixture['previousResultAway'][4];
              }
            }

            this.games.push(game);
          }
          this.games.sort((a, b) => a.date - b.date);
        }
      );
    });
  }

  get pseudo() { return this.form.get('pseudo'); }


  getClassForResult(value){
    if(value == 'V'){
      return 'badge badge-pill badge-success result-marge';
    } else if(value == 'N'){
      return 'badge badge-pill badge-warning result-marge';
    } else {
      return 'badge badge-pill badge-danger result-marge';
    }
    
  }

  saveProno() {
    this.form.setValue;
    if(this.auth.isLoggednIn()){
      this.http.post(environment.apiUrl.concat('pronostic/true'), this.form.value)
      .toPromise().then(
        d => {
          this.router.navigate(['/pronostics']); 
          this.openDialog();
        }
      );
    } else {
      this.http.post(environment.apiUrl.concat('pronostic/false'), this.form.value)
      .toPromise().then(
        d => {
          this.router.navigate(['/pronostics']); 
          this.openDialog();
        },error => {
          if(error.status == 401){
            this.errorFlag = true;
          } else if(error.status == 409){
            this.conflictFlag = true;
          }
        }
      );
    }
   
  }

  isDisable(id){
    let disable: Boolean = false;
    switch(id){
      case 1: disable = this.disableM1; break;
      case 2: disable = this.disableM2; break;
      case 3: disable = this.disableM3; break;
      case 4: disable = this.disableM4; break;
      case 5: disable = this.disableM5; break;
      case 6: disable = this.disableM6; break;
      case 7: disable = this.disableM7; break;
      case 8: disable = this.disableM8; break;
      case 9: disable = this.disableM9; break;
      case 10: disable = this.disableM10; break;
    }

    return disable? '' : null;
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PronoDialogComponent, {
      width: '250px'
    });
  }

}

export class Team {
  display: string;
  logo: String;
}
