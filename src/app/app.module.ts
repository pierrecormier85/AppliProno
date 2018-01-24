import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PronoFormComponent } from './prono-form/prono-form.component';
import { PronoListComponent } from './prono-list/prono-list.component';
import { PronoStatsComponent } from './prono-stats/prono-stats.component';
import { PieChartComponent } from './chart/piechart.component';

import { GooglePieChartService } from './chart/google-pie-chart.service';

const appRoutes: Routes = [
  { path: '', component: PronoFormComponent },
  { path: 'pronostics', component: PronoListComponent },
  { path: 'stats', component: PronoStatsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PronoFormComponent,
    PronoListComponent,
    PronoStatsComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [GooglePieChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
