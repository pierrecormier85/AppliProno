import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Pronostic } from '../models/pronostic';
import { Matchday } from '../models/matchday';

import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-prono-list',
  templateUrl: './prono-list.component.html',
  styleUrls: ['./prono-list.component.css']
})
export class PronoListComponent implements OnInit {
  pronostics: Pronostic[];
  matchday;
  journey: Matchday;

  displayedColumns = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9','m10', 'pseudo'];
  dataSource = new MatTableDataSource(this.pronostics);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  url = 'https://pronorest.herokuapp.com/api/';
   //url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { 
    this.journey = new Matchday();
    this.journey.matchday = ['','','','','','','','','',''];
  }

  ngOnInit() {
    this.http.get(this.url.concat('fixtures/current/'))
    .toPromise().then(m => {
        this.matchday = Number(m);
      }
    ).then(r => {
      this.http.get<Pronostic[]>(this.url.concat('pronostic/').concat(this.matchday))
      .toPromise().then(data => {
          // Read the result field from the JSON response.
          this.pronostics = data;
          this.dataSource.data = this.pronostics;
        }
      );
    }
    );

    this.http.get(this.url.concat('fixtures/'))
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
