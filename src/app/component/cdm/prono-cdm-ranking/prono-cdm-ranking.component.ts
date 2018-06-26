import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Ranking } from '../../../models/ranking';

import { GENERAL, MONTH, JOURNEY } from './../../../const/constants';

import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { AuthService } from '../../../auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-prono-cdm-ranking',
  templateUrl: './prono-cdm-ranking.component.html',
  styleUrls: ['./prono-cdm-ranking.component.css']
})
export class PronoCdmRankingComponent implements OnInit {
  rankings: Ranking[];
  search: String;

  displayedColumns = ['rank', 'pseudo', 'score'];
  dataSource = new MatTableDataSource(this.rankings);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private http: HttpClient, public auth: AuthService) { }

  ngOnInit() {
    this.http.get<Ranking[]>("./assets/json/cdm rank.json")
    .toPromise().then(data => {
        this.rankings = [];
        let i = 1;
        
		    data.sort((a, b) => b.score - a.score);
      
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
    this.applyFilter(this.auth.getDecodeToken());
    this.search = this.auth.getDecodeToken();
  }
}
