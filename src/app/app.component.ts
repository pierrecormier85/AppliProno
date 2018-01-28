import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import { API_URL } from './const/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private http: HttpClient) {
    iconRegistry.addSvgIcon('logodv', sanitizer.bypassSecurityTrustResourceUrl('assets/img/logodv.svg'));
    iconRegistry.addSvgIcon('list', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/list.svg'));
    iconRegistry.addSvgIcon('results', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/results.svg'));
    iconRegistry.addSvgIcon('stats', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/stats.svg'));
  }

  ngOnInit(): void {
  }

  btnPronosClick() {
    this.router.navigate(['/']);
  }

  btnParticipationsClick(){
    this.router.navigate(['/pronostics']);
  }

  btnPreviousParticipationsClick(){
    this.http.get(API_URL.concat('fixtures/current/'))
    .toPromise().then(m => {
        let matchday = Number(m) -1 ;
        this.router.navigate(['/pronostics/' + matchday ]);
      }
    )
  }

  btnStatsClick() {
    this.router.navigate(['/stats']);
  }

  btnInfosClick() {
    this.router.navigate(['/infos']);
  }
}
