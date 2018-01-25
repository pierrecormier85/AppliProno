import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { PieChartConfig } from '../chart/PieChartConfig';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-prono-stats',
  templateUrl: './prono-stats.component.html',
  styleUrls: ['./prono-stats.component.css']
})
export class PronoStatsComponent implements OnInit {
  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  statistique: Statistique;
  url = 'https://pronorest.herokuapp.com/api/';
//  url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data1 = [['Prono', 'Nb'],
        ['1', this.statistique.nb1M1],
        ['N',  this.statistique.nbNM1],
        ['2', this.statistique.nb2M1]];
    this.config1 = new PieChartConfig('', 0.4);
    this.elementId1 = 'myPieChart1';


    this.http.get(this.url.concat('statistique'))
    .toPromise().then(data => {
        // Read the result field from the JSON response.
        this.statistique = new Statistique();
        this.statistique.m1 = data['m1'];
        this.statistique.nb1M1 = data['nb1M1'];
        this.statistique.nb2M1 = data['nb2M1'];
        this.statistique.nbNM1 = data['nbNM1'];


        let tre = '';

        this.data1 = [['Prono', 'Nb'],
        ['1', this.statistique.nb1M1],
        ['N',  this.statistique.nbNM1],
        ['2', this.statistique.nb2M1]];

        this.config1.title = this.statistique.m1;
      }
    );
  }

}
