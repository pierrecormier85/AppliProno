import { Component, OnInit, ViewChild } from '@angular/core';
import { Participation } from '../../../models/participation';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-prono-ranking-participation',
  templateUrl: './prono-ranking-participation.component.html',
  styleUrls: ['./prono-ranking-participation.component.css']
})
export class PronoRankingParticipationComponent implements OnInit {
  participations: Participation[];
  search: String;

  displayedColumns = ['rank', 'pseudo', 'nombre', 'derniere'];
  dataSource = new MatTableDataSource(this.participations);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private http: HttpClient, public auth: AuthService) { }

  ngOnInit() {
    this.http.get<Participation[]>(environment.apiUrl.concat('participations'))
    .toPromise().then(data => {
        this.participations = [];
        let i = 1;

        for(let r of data){
          r.rank = i;
          this.participations.push(r);
          i++;
        }
        
        this.dataSource.data = this.participations;
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
