import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'logodv',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/logodv.svg'));
  }

  ngOnInit(): void {
  }

  btnPronosClick() {
    this.router.navigate(['/']);
  }

  btnParticipationsClick(){
    this.router.navigate(['/pronostics']);
  }

  btnStatsClick() {
    this.router.navigate(['/stats']);
  }
}
