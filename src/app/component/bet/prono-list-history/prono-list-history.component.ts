import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Pronostic } from '../../../models/pronostic';
import { Matchday } from '../../../models/matchday';

import { API_URL } from './../../../const/constants';

import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-prono-list-history',
  templateUrl: './prono-list-history.component.html',
  styleUrls: ['./prono-list-history.component.css']
})
export class PronoListHistoryComponent implements OnInit {
  pronostics: Pronostic[];
  journey: Matchday;
  selectedItem: number;
  search: String;
  public values = [];

  displayedColumns = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9','m10', 'pseudo'];
  dataSource = new MatTableDataSource(this.pronostics);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private http: HttpClient, public auth: AuthService) { 
    this.journey = new Matchday();
    this.journey.matchday = ['','','','','','','','','',''];
    this.selectedItem=1;
  }

  ngOnInit() {
    this.http.get(API_URL.concat('fixtures/current/'))
    .toPromise().then(m => {
        for(let i = 1; i <= Number(m); i++){
          this.values.push(i);
        }
      });

    this.changeTab();
  }

  onItemChanged(selectedValue:number){
    console.log('value is ',selectedValue);
    this.selectedItem = selectedValue;
    this.changeTab();
   }

  changeTab(){
    this.http.get<Pronostic[]>(API_URL.concat('pronostic/').concat(this.selectedItem.toString()))
    .toPromise().then(data => {
        // Read the result field from the JSON response.
        this.pronostics = data;
        this.dataSource.data = this.pronostics;
      }
    );

    this.http.get(API_URL.concat('fixtures/').concat(this.selectedItem.toString()))
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
