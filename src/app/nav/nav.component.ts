import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import { GENERAL, MONTH, JOURNEY, MOYENNE, PARTICIPATION } from '../const/constants';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( public auth: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  btnPreviousParticipationsClick(){
    this.http.get(environment.apiUrl.concat('fixtures/current/'))
    .toPromise().then(m => {
        let matchday = Number(m) -1 ;
        this.router.navigate(['/pronostics/' + matchday ]);
      }
    )
  }

  btnGeneralRankingClick() {
    this.router.navigate(['/' + GENERAL]);
  }

  btnMonthRankingClick() {
    this.router.navigate(['/' + MONTH]);
  }

  btnJourneyRankingClick() {
    this.router.navigate(['/' + JOURNEY]);
  }

}
