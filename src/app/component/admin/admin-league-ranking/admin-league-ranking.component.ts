import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import {OrderListModule} from 'primeng/orderlist';

import { Team } from '../../../models/team';

@Component({
  selector: 'app-league-ranking',
  templateUrl: './admin-league-ranking.component.html',
  styleUrls: ['./admin-league-ranking.component.css']
})
export class AdminLeagueRankingComponent implements OnInit {

  
  title = 'app';
  teams: Team[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("./assets/json/l1.json").toPromise().then(data => {
      this.teams = [];

      for (let index in data) {
        let jsonTeam = data[index];
        let team = new Team();
        team.id = jsonTeam['id'];
        team.name = jsonTeam['name'];
        team.flag = jsonTeam['logo'];

        this.teams.push(team);
      }      
    });
  }

  save() {
    
  }

}