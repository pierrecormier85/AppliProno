import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Pronostic } from '../../../models/pronostic';
import { Matchday } from '../../../models/matchday';

import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { AuthService } from '../../../auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-prono-list',
  templateUrl: './prono-list.component.html',
  styleUrls: ['./prono-list.component.css']
})
export class PronoListComponent implements OnInit {
  pronostics: Pronostic[];
  matchday;
  journey: Matchday;
  search: String;

  displayedColumns = ['pseudo'];
  dataSource = new MatTableDataSource(this.pronostics);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private http: HttpClient, public auth: AuthService) { 
    this.journey = new Matchday();
    this.journey.matchday = [''];
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.http.get(environment.apiUrl.concat('fixtures/current/'))
    .toPromise().then(m => {
        this.matchday = Number(m);
        if(id != null){
          this.matchday = Number(id);
        }
      }
    ).then(r => {
      this.http.get<Pronostic[]>(environment.apiUrl.concat('pronostic/').concat(this.matchday))
      .toPromise().then(data => {
          // Read the result field from the JSON response.
          this.pronostics = data;
          this.dataSource.data = this.pronostics;
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

        this.http.get(environment.apiUrl.concat('fixtures/').concat(this.matchday))
        .toPromise().then(data => {
            // Read the result field from the JSON response.
            this.journey.matchday = [];
            for (let i = 1; i < 11; i ++) {
              const fixture = data[i-1];
              const j = teams[fixture['home']].display + ' - ' + teams[fixture['away']].display;
              this.journey.matchday.push(j);
            }
          }
        );
      });
    }
    );

    
  }

  findMe(){
    this.applyFilter(this.auth.getDecodeToken());
    this.search = this.auth.getDecodeToken();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

export class Team {
  display: string;
  logo: String;
}