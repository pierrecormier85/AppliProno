import { Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import { GooglePieChartService } from './google-pie-chart.service';
import { PieChartConfig } from './PieChartConfig';

declare var google: any;


@Component({
  selector: 'pie-chart',
  templateUrl: './piechart.component.html'
})
export class PieChartComponent implements OnChanges, OnInit {

    @Input() data: any[];
    @Input() config: PieChartConfig;
    @Input() elementId: string;

    constructor(private _pieChartService: GooglePieChartService) {}

    ngOnInit(): void {
        this._pieChartService.BuildPieChart(this.elementId, this.data, this.config); 
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.data){
            const data: SimpleChange = changes.data;
            this.data = data.currentValue;
        }
       
        if(changes.config){
            const config: SimpleChange = changes.config;
            this.config = config.currentValue;
        }

        this._pieChartService.BuildPieChart(this.elementId, this.data, this.config); 
      }
}