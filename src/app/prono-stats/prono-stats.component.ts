import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { PieChartConfig } from '../chart/PieChartConfig';
import { Statistique } from '../models/statistique';

import { API_URL } from './../const/constants';

@Component({
  selector: 'app-prono-stats',
  templateUrl: './prono-stats.component.html',
  styleUrls: ['./prono-stats.component.css']
})
export class PronoStatsComponent implements OnInit {
  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  data2: any[];
  config2: PieChartConfig;
  elementId2: String;

  data3: any[];
  config3: PieChartConfig;
  elementId3: String;

  data4: any[];
  config4: PieChartConfig;
  elementId4: String;

  data5: any[];
  config5: PieChartConfig;
  elementId5: String;

  data6: any[];
  config6: PieChartConfig;
  elementId6: String;

  data7: any[];
  config7: PieChartConfig;
  elementId7: String;

  data8: any[];
  config8: PieChartConfig;
  elementId8: String;

  data9: any[];
  config9: PieChartConfig;
  elementId9: String;

  data10: any[];
  config10: PieChartConfig;
  elementId10: String;

  statistique: Statistique;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.init();

    this.http.get(API_URL.concat('statistique'))
    .toPromise().then(data => {
        // Read the result field from the JSON response.
        this.statistique = new Statistique();
        this.statistique.m1 = data['m1'];
        this.statistique.nb1M1 = data['nb1M1'];
        this.statistique.nb2M1 = data['nb2M1'];
        this.statistique.nbNM1 = data['nbNM1'];
        this.statistique.m2 = data['m2'];
        this.statistique.nb1M2 = data['nb1M2'];
        this.statistique.nb2M2 = data['nb2M2'];
        this.statistique.nbNM2 = data['nbNM2'];
        this.statistique.m3 = data['m3'];
        this.statistique.nb1M3 = data['nb1M3'];
        this.statistique.nb2M3 = data['nb2M3'];
        this.statistique.nbNM3 = data['nbNM3'];
        this.statistique.m4 = data['m4'];
        this.statistique.nb1M4 = data['nb1M4'];
        this.statistique.nb2M4 = data['nb2M4'];
        this.statistique.nbNM4 = data['nbNM4'];
        this.statistique.m5 = data['m5'];
        this.statistique.nb1M5 = data['nb1M5'];
        this.statistique.nb2M5 = data['nb2M5'];
        this.statistique.nbNM5 = data['nbNM5'];
        this.statistique.m6 = data['m6'];
        this.statistique.nb1M6 = data['nb1M6'];
        this.statistique.nb2M6 = data['nb2M6'];
        this.statistique.nbNM6 = data['nbNM6'];
        this.statistique.m7 = data['m7'];
        this.statistique.nb1M7 = data['nb1M7'];
        this.statistique.nb2M7 = data['nb2M7'];
        this.statistique.nbNM7 = data['nbNM7'];
        this.statistique.m8 = data['m8'];
        this.statistique.nb1M8 = data['nb1M8'];
        this.statistique.nb2M8 = data['nb2M8'];
        this.statistique.nbNM8 = data['nbNM8'];
        this.statistique.m9 = data['m9'];
        this.statistique.nb1M9 = data['nb1M9'];
        this.statistique.nb2M9 = data['nb2M9'];
        this.statistique.nbNM9 = data['nbNM9'];
        this.statistique.m10 = data['m10'];
        this.statistique.nb1M10 = data['nb1M10'];
        this.statistique.nb2M10 = data['nb2M10'];
        this.statistique.nbNM10 = data['nbNM10'];

        this.initWithStatistique();
      }
    );
  }

  init() {
    this.data1 = [];
    this.config1 = new PieChartConfig('', 0.4);
    this.elementId1 = 'myPieChart1';

    this.data2 = [];
    this.config2 = new PieChartConfig('', 0.4);
    this.elementId2 = 'myPieChart2';

    this.data3 = [];
    this.config3 = new PieChartConfig('', 0.4);
    this.elementId3 = 'myPieChart3';

    this.data4 = [];
    this.config4 = new PieChartConfig('', 0.4);
    this.elementId4 = 'myPieChart4';

    this.data5 = [];
    this.config5 = new PieChartConfig('', 0.4);
    this.elementId5 = 'myPieChart5';

    this.data6 = [];
    this.config6 = new PieChartConfig('', 0.4);
    this.elementId6 = 'myPieChart6';

    this.data7 = [];
    this.config7 = new PieChartConfig('', 0.4);
    this.elementId7 = 'myPieChart7';

    this.data8 = [];
    this.config8 = new PieChartConfig('', 0.4);
    this.elementId8 = 'myPieChart8';

    this.data9 = [];
    this.config9 = new PieChartConfig('', 0.4);
    this.elementId9 = 'myPieChart9';

    this.data10 = [];
    this.config10 = new PieChartConfig('', 0.4);
    this.elementId10 = 'myPieChart10';
  }

  initWithStatistique(){
    this.data1 = [['Prono', 'Nb'],
    ['1', this.statistique.nb1M1],
    ['N',  this.statistique.nbNM1],
    ['2', this.statistique.nb2M1]];

    this.config1.title = this.statistique.m1;

    this.data2 = [['Prono', 'Nb'],
    ['1', this.statistique.nb1M2],
    ['N',  this.statistique.nbNM2],
    ['2', this.statistique.nb2M2]];

    this.config2.title = this.statistique.m2;

    this.data3 = [['Prono', 'Nb'],
    ['1', this.statistique.nb1M3],
    ['N',  this.statistique.nbNM3],
    ['2', this.statistique.nb2M3]];

    this.config3.title = this.statistique.m3;

    this.data4 = [['Prono', 'Nb'],
      ['1', this.statistique.nb1M4],
      ['N',  this.statistique.nbNM4],
      ['2', this.statistique.nb2M4]];

      this.config4.title = this.statistique.m4;

      this.data5 = [['Prono', 'Nb'],
      ['1', this.statistique.nb1M5],
      ['N',  this.statistique.nbNM5],
      ['2', this.statistique.nb2M5]];

      this.config5.title = this.statistique.m5;

      this.data6 = [['Prono', 'Nb'],
      ['1', this.statistique.nb1M6],
      ['N',  this.statistique.nbNM6],
      ['2', this.statistique.nb2M6]];

      this.config6.title = this.statistique.m6;

      this.data7 = [['Prono', 'Nb'],
      ['1', this.statistique.nb1M7],
      ['N',  this.statistique.nbNM7],
      ['2', this.statistique.nb2M7]];

      this.config7.title = this.statistique.m7;

      this.data8 = [['Prono', 'Nb'],
      ['1', this.statistique.nb1M8],
      ['N',  this.statistique.nbNM8],
      ['2', this.statistique.nb2M8]];

      this.config8.title = this.statistique.m8;

      this.data9 = [['Prono', 'Nb'],
      ['1', this.statistique.nb1M9],
      ['N',  this.statistique.nbNM9],
      ['2', this.statistique.nb2M9]];

      this.config9.title = this.statistique.m9;

      this.data10 = [['Prono', 'Nb'],
      ['1', this.statistique.nb1M10],
      ['N',  this.statistique.nbNM10],
      ['2', this.statistique.nb2M10]];

      this.config10.title = this.statistique.m10;
  }
}
