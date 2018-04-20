import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Pronostic } from '../models/pronostic';
import { Matchday } from '../models/matchday';

import { API_URL } from './../const/constants';

import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { AuthService } from '../auth.service';

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

  displayedColumns = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9','m10', 'pseudo'];
  dataSource = new MatTableDataSource(this.pronostics);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private http: HttpClient, public auth: AuthService) { 
    this.journey = new Matchday();
    this.journey.matchday = ['','','','','','','','','',''];
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.http.get(API_URL.concat('fixtures/current/'))
    .toPromise().then(m => {
        this.matchday = Number(m);
        if(id != null){
          this.matchday = Number(id);
        }
      }
    ).then(r => {
      this.http.get<Pronostic[]>(API_URL.concat('pronostic/').concat(this.matchday))
      .toPromise().then(data => {
          // Read the result field from the JSON response.
          this.pronostics = data;
          this.dataSource.data = this.pronostics;
        }
      );

      this.http.get(API_URL.concat('fixtures/').concat(this.matchday))
        .toPromise().then(data => {
            // Read the result field from the JSON response.
            this.journey.matchday = [];
            for (let i = 1; i < 11; i ++) {
              const fixture = data[i-1];
              const j = fixture['home'] + ' - ' + fixture['away'];
              this.journey.matchday.push(j);
            }
          }
        );
    }
    );

    
  }

  findMe(){
    this.applyFilter(this.auth.getToken());
    this.search = this.auth.getToken();
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
