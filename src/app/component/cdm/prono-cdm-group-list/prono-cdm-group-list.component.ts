import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AuthService } from '../../../auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CURRENT_KNOCKOUT } from '../../../const/constants';

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
    this.http.get(environment.apiUrl.concat('prono/cdm/knockout/').concat(CURRENT_KNOCKOUT))
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


  getTitle(){
    let phase: string;

    if(CURRENT_KNOCKOUT == 'round_16'){
      phase = 'huitièmes de finale'
    } else if(CURRENT_KNOCKOUT == 'round_8'){
      phase = 'quarts de finale'
    } else if(CURRENT_KNOCKOUT == 'round_4'){
      phase = 'demi de finale'
    } else if(CURRENT_KNOCKOUT == 'round_2'){
      phase = 'finales'
    }

    return "Participations aux pronostics des ".concat(phase).concat(" de la CDM");
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
