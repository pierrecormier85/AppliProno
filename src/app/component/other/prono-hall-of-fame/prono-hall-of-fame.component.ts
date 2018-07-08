import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-prono-hall-of-fame',
  templateUrl: './prono-hall-of-fame.component.html',
  styleUrls: ['./prono-hall-of-fame.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PronoHallOfFameComponent implements OnInit {
  data1: TreeNode[];

  constructor() { }

  ngOnInit() {
    this.data1 = [{
      label: 'Hall of Fame',
      styleClass: 'department-cto',
      expanded: true,
      children: [
          {
            label: 'Prono Ligue 1',
            styleClass: 'department-cfo',
            expanded: true,
            children:[{
                label: '2016 - 2017',
                type: 'person',
                styleClass: 'ui-person',
                data: {name:'Yaman'}
              },{
                label: '2017 - 2018',
                type: 'person',
                styleClass: 'ui-person',
                data: {name:'Mathieu'}
              },{
                label: '2018 - 2019',
                type: 'person',
                styleClass: 'ui-person',
                data: {name:'Maybe you !'}
              }
            ],
          },
          {
            label: 'Prono CDM',
            styleClass: 'department-coo',
            expanded: true,
            children:[{
              label: 'CDM 2018',
              type: 'person',
              styleClass: 'ui-person',
              data: {name:'En Cours !'}
            }]
          }
      ]
    }];
  }

}
