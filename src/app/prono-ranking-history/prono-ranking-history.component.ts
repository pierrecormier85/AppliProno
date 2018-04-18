import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Ranking } from '../models/ranking';

import { API_URL, GENERAL, MONTH, JOURNEY, HISTORY_MONTH, HISTORY_WEEK } from './../const/constants';

import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-prono-ranking-history',
  templateUrl: './prono-ranking-history.component.html',
  styleUrls: ['./prono-ranking-history.component.css']
})
export class PronoRankingHistoryComponent implements OnInit {
   rankings: Ranking[];
   type: String;
   selectedItem: number;
   public values = [];

  displayedColumns = ['rank', 'pseudo', 'score'];
  dataSource = new MatTableDataSource(this.rankings);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

   constructor(private route: ActivatedRoute, private http: HttpClient) { 
     this.selectedItem=1;
   }

  ngOnInit() {
    this.type = this.route.routeConfig.path;

    if(this.type == HISTORY_MONTH){
      this.values = [8,9,10,11,12,1,2,3,4,5,6];
      this.selectedItem = 8;
    } else if(this.type == HISTORY_WEEK){
      this.http.get(API_URL.concat('fixtures/current/'))
    .toPromise().then(m => {
        for(let i = 1; i <= Number(m); i++){
          this.values.push(i);
        }
      });
    }

    
    this.changeTab();
  }

  onItemChanged(selectedValue:number){
    console.log('value is ',selectedValue);
    this.selectedItem = selectedValue;
    this.changeTab();
   }

  changeTab(){
    let url = '';

    if(this.type == HISTORY_MONTH){
      url = 'ranking/month/';
    } else if(this.type == HISTORY_WEEK){
      url = 'ranking/week/';
    }

    url = url.concat(this.selectedItem.toString())

    this.http.get<Ranking[]>(API_URL.concat(url))
    .toPromise().then(data => {
        this.rankings = [];
        let i = 1;

        for(let r of data){
          r.rank = i;
          this.rankings.push(r);
          i++;
        }
        
        this.dataSource.data = this.rankings;
      }
    );
  }

  getTitle(){
    if(this.type == HISTORY_MONTH){
      return 'Classement du mois '.concat(this.selectedItem.toString());
    } else if(this.type == HISTORY_WEEK){
      return 'Classement de la journée '.concat(this.selectedItem.toString());
    }
  }

  getOptionName(){
    if(this.type == HISTORY_MONTH){
      return 'Mois';
    } else if(this.type == HISTORY_WEEK){
      return 'Journée';
    }
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
