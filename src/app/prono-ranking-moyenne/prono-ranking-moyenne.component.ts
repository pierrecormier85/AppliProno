import { Component, OnInit, ViewChild } from '@angular/core';
import { Moyenne } from '../models/moyenne';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../const/constants';

@Component({
  selector: 'app-prono-ranking-moyenne',
  templateUrl: './prono-ranking-moyenne.component.html',
  styleUrls: ['./prono-ranking-moyenne.component.css']
})
export class PronoRankingMoyenneComponent implements OnInit {
  moyennes: Moyenne[];

  displayedColumns = ['rank', 'pseudo', 'moyenne', 'participation'];
  dataSource = new MatTableDataSource(this.moyennes);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Moyenne[]>(API_URL.concat('participations/moyennes'))
    .toPromise().then(data => {
        this.moyennes = [];
        let i = 1;

        for(let r of data){
          r.rank = i;
          this.moyennes.push(r);
          i++;
        }
        
        this.dataSource.data = this.moyennes;
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
