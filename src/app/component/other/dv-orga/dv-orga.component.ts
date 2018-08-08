import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dv-orga',
  templateUrl: './dv-orga.component.html',
  styleUrls: ['./dv-orga.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DVOrgaComponent implements OnInit {
  data1: TreeNode[];

  constructor() { }

  ngOnInit() {
    this.data1 = [{
      label: 'Organisation demivolee.com',
      styleClass: 'department-cto',
      expanded: true,
      children: [
          {
            label: 'Rédaction',
            styleClass: 'department-cfo',
            expanded: true,
            children:[{
              label: 'Rédacteur en chef',
              type: 'person',
              styleClass: 'ui-person',
              data: {name:'NSOL'},
              expanded: true,
              children:[{
                label: 'Relecteurs adjoints',
                styleClass: 'department-coo',
                expanded: true,
                children:[{
                  label: 'Relecteur',
                  type: 'person',
                  styleClass: 'ui-person',
                  data: {name:'Aloïs'}
                },{
                  label: 'Relecteur',
                  type: 'person',
                  styleClass: 'ui-person',
                  data: {name:'Betse'}
                },{
                  label: 'Relecteur',
                  type: 'person',
                  styleClass: 'ui-person',
                  data: {name:'Kick'}
                },{
                  label: 'Relecteur',
                  type: 'person',
                  styleClass: 'ui-person',
                  data: {name:'Prince Owski'}
                },{
                  label: 'Relecteur',
                  type: 'person',
                  styleClass: 'ui-person',
                  data: {name:'Yaman'}
                }]
              },{
                label: 'Rédacteurs',
                styleClass: 'department-coo',
                expanded: true,
                children:[{
                  label: 'Rédacteur',
                  type: 'person',
                  styleClass: 'ui-person',
                  data: {name:'Clément'}
                },{
                  label: 'Rédacteur  ',
                  type: 'person',
                  styleClass: 'ui-person',
                  data: {name:'Pierre'}
                }]
              }]
            }],
          },
          {
            label: 'Modération',
            styleClass: 'department-cfo',
            expanded: true,
            children:[{
              label: 'Modérateur principal',
              type: 'person',
              styleClass: 'ui-person',
              data: {name:'Yaman'},
              expanded: true,
              children:[{
                label: 'Modérateurs',
                styleClass: 'department-coo',
                expanded: true,
                children:[{
                  label: 'Modérateur',
                  type: 'person',
                  styleClass: 'ui-person',
                  data: {name:'Kick'}
                },{
                  label: 'Modérateur  ',
                  type: 'person',
                  styleClass: 'ui-person',
                  data: {name:'Prince Owski'}
                }]
              }]
            }]
          },
          {
            label: 'Illustrations',
            styleClass: 'department-cfo',
            expanded: true,
            children:[{
              label: 'Illustrateur',
              type: 'person',
              styleClass: 'ui-person',
              data: {name:'Aloïs'},
            },{
              label: 'Illustrateur',
              type: 'person',
              styleClass: 'ui-person',
              data: {name:'Clément'},
            },{
              label: 'Illustrateur',
              type: 'person',
              styleClass: 'ui-person',
              data: {name:'Prince Owski'},
            }]
          },
          {
            label: 'Développement',
            styleClass: 'department-cfo',
            expanded: true,
            children:[{
              label: 'Maintenance - site web',
              styleClass: 'department-coo',
              expanded: true,
              children:[{
                label: 'Maintenance',
                type: 'person',
                styleClass: 'ui-person',
                data: {name:'Clément'}
              }, {
                label: 'Maintenance',
                type: 'person',
                styleClass: 'ui-person',
                data: {name:'Yaman'}
              }]
            },{
              label: 'Outil composition',
              type: 'person',
              styleClass: 'ui-person',
              data: {name:'Pierre'}
            }]
          }
      ]
    }];
  }

}
