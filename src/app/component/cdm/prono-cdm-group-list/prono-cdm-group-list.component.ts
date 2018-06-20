import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AuthService } from '../../../auth.service';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../const/constants';

@Component({
  selector: 'app-prono-cdm-group-list',
  templateUrl: './prono-cdm-group-list.component.html',
  styleUrls: ['./prono-cdm-group-list.component.css']
})
export class PronoCdmGroupListComponent implements OnInit {
  pronostics: String[];
  search: String;

  displayedColumns = ['pseudo'];
  dataSource = new MatTableDataSource(this.pronostics);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private http: HttpClient, public auth: AuthService) { }

  ngOnInit() {
    this.http.get(API_URL.concat('prono/cdm/group/all'))
    .toPromise().then(data => {
        // Read the result field from the JSON response.
        this.pronostics = []
        for (let prono in data) {
          this.pronostics.push(data[prono]['pseudo']);
        }
        this.dataSource.data = this.pronostics;
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
