import { Component, OnInit } from '@angular/core';
import { PieChartConfig } from '../chart/PieChartConfig';

@Component({
  selector: 'app-prono-stats',
  templateUrl: './prono-stats.component.html',
  styleUrls: ['./prono-stats.component.css']
})
export class PronoStatsComponent implements OnInit {
  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  constructor() { }

  ngOnInit() {
    this.data1 = [['Task', 'Hours per Day'],
    ['Eat',      3],
    ['Commute',  2],
    ['Watch TV', 5],
    ['Video games', 4],
    ['Sleep',    10]];

    this.config1 = new PieChartConfig('My Daily Activities at 20 years old', 0.4);
    this.elementId1 = 'myPieChart1';
  }

}
