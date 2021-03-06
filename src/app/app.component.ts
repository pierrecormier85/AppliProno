import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('logodv', sanitizer.bypassSecurityTrustResourceUrl('assets/img/logodv.svg'));
    iconRegistry.addSvgIcon('list', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/list.svg'));
    iconRegistry.addSvgIcon('results', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/results.svg'));
    iconRegistry.addSvgIcon('stats', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/stats.svg'));
    iconRegistry.addSvgIcon('ranking', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ranking.svg'));
    iconRegistry.addSvgIcon('general', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/general.svg'));
    iconRegistry.addSvgIcon('month', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/month.svg'));
    iconRegistry.addSvgIcon('journey', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/journey.svg'));
    iconRegistry.addSvgIcon('moyenne', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/moyenne.svg'));
    iconRegistry.addSvgIcon('participation', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/participation.svg'));
    iconRegistry.addSvgIcon('halloffame', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/hall-of-fame.svg'));
  }

  ngOnInit(): void {
  }

}
