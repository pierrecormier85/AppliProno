import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import { API_URL, GENERAL, MONTH, JOURNEY } from '../const/constants';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private auth: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  btnPreviousParticipationsClick(){
    this.http.get(API_URL.concat('fixtures/current/'))
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
