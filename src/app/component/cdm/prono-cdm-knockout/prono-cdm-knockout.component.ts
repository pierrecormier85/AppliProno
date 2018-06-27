import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Group } from '../../../models/group';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../../models/team';
import { Match } from '../../../models/match';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { CURRENT_KNOCKOUT } from '../../../const/constants';

@Component({
  selector: 'prono-cdm-knockout',
  templateUrl: './prono-cdm-knockout.component.html',
  styleUrls: ['./prono-cdm-knockout.component.css']
})
export class PronoCdmKnockoutComponent implements OnInit {

  teams : Team[];
  matchs: Match[];
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { 
    this.form = this.fb.group({
      m1: new FormControl('', Validators.required),
      m2: new FormControl('', Validators.required),
      m3: new FormControl('', Validators.required),
      m4: new FormControl('', Validators.required),
      m5: new FormControl('', Validators.required),
      m6: new FormControl('', Validators.required),
      m7: new FormControl('', Validators.required),
      m8: new FormControl('', Validators.required),
      pseudo: new FormControl('', Validators.required),
      round: CURRENT_KNOCKOUT
    });
  }

  ngOnInit() {
    this.initValidators();

    this.http.get("./assets/json/cdm.json").toPromise().then(data => {
      let jsonTeams = data['teams'];
      this.teams = [];
      this.matchs = [];

      
      for (let index in jsonTeams) {
        let jsonTeam = jsonTeams[index];
        let team = new Team();
        team.id = jsonTeam['id'];
        team.name = jsonTeam['name'];
        team.flag = jsonTeam['iso2'];

        this.teams.push(team);
      }

      let jsonknockout = data['knockout'];
      for(let round in jsonknockout){
        
        if(round == CURRENT_KNOCKOUT){
          let jsonRound = jsonknockout[round];
          let name = jsonRound['name'];
          let jsonMatchs = jsonRound['matches'];
          let idMatch = 1;

          for(let index in jsonMatchs){
            let jsonMatch = jsonMatchs[index];

            let match = new Match();
            match.id = jsonMatch['name'];
            match.id = idMatch;
            idMatch++;

            match.home = this.teams[jsonMatch['home_team'] - 1];
            if(match.home == null){
              let home_team = new Team();
              home_team.id = 0;
              home_team.name = jsonMatch['home_team'];
              home_team.flag = 'fr';
              match.home = home_team;  
            }
            
            match.away = this.teams[jsonMatch['away_team'] - 1];
            if(match.away == null){
              let away_team = new Team();
              away_team.id = 0;
              away_team.name = jsonMatch['away_team'];
              away_team.flag = 'fr';
              match.away = away_team;  
            }

            match.group = name;
  
            this.matchs.push(match);
          }
          break;
        }
        
      }

      
    });
  }

  initValidators(){
    if(CURRENT_KNOCKOUT == 'round_8') {
      this.form.controls['m5'].setValidators(null);
      this.form.controls['m6'].setValidators(null);
      this.form.controls['m7'].setValidators(null);
      this.form.controls['m8'].setValidators(null);
    } else if(CURRENT_KNOCKOUT == 'round_4') {
      this.form.controls['m3'].setValidators(null);
      this.form.controls['m4'].setValidators(null);
      this.form.controls['m5'].setValidators(null);
      this.form.controls['m6'].setValidators(null);
      this.form.controls['m7'].setValidators(null);
      this.form.controls['m8'].setValidators(null);
    } else if(CURRENT_KNOCKOUT == 'round_2') {
      this.form.controls['m3'].setValidators(null);
      this.form.controls['m4'].setValidators(null);
      this.form.controls['m5'].setValidators(null);
      this.form.controls['m6'].setValidators(null);
      this.form.controls['m7'].setValidators(null);
      this.form.controls['m8'].setValidators(null);
    }
  }

  submit() {
    if (this.form.valid) {
      this.form.setValue;
      this.http.post(environment.apiUrl.concat('prono/cdm/knockout'), this.form.value)
    .toPromise().then(
      d => {
        this.router.navigate(['/cdm/list']); 
      }
    );
    }
  }
  
}
