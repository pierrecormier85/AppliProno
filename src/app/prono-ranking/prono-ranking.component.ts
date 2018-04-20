import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Ranking } from '../models/ranking';

import { API_URL, GENERAL, MONTH, JOURNEY } from './../const/constants';

import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prono-ranking',
  templateUrl: './prono-ranking.component.html',
  styleUrls: ['./prono-ranking.component.css']
})
export class PronoRankingComponent implements OnInit {
  rankings: Ranking[];
  url: string;
  search: String;

  displayedColumns = ['rank', 'pseudo', 'score'];
  dataSource = new MatTableDataSource(this.rankings);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private http: HttpClient, public auth: AuthService) { }

  ngOnInit() {
    this.url = this.route.routeConfig.path;

    this.http.get<Ranking[]>(API_URL.concat(this.url))
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  findMe(){
    this.applyFilter(this.auth.getToken());
    this.search = this.auth.getToken();
  }

  getTitle(){
    if(this.url == GENERAL){
      return 'Classement général';
    } else if(this.url == MONTH){
      return 'Classement du mois';
    } else {
      return 'Classement de la journée';
    }
    
  }
}
