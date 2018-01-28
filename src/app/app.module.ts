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
import { PronoDialogComponent } from './prono-dialog/prono-dialog.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import { GooglePieChartService } from './chart/google-pie-chart.service';
import { PronoRankingComponent } from './prono-ranking/prono-ranking.component';
import { PronoInfoComponent } from './prono-info/prono-info.component';
import { GENERAL, MONTH, JOURNEY } from './const/constants';

const appRoutes: Routes = [
  { path: '', component: PronoFormComponent },
  { path: 'pronostics', component: PronoListComponent },
  { path: 'pronostics/:id', component: PronoListComponent },
  { path: 'stats', component: PronoStatsComponent },
  { path: 'infos', component: PronoInfoComponent },
  { path: GENERAL, component: PronoRankingComponent },
  { path: MONTH, component: PronoRankingComponent },
  { path: JOURNEY, component: PronoRankingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PronoFormComponent,
    PronoListComponent,
    PronoStatsComponent,
    PieChartComponent,
    PronoDialogComponent,
    PronoRankingComponent,
    PronoInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,  
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSortModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  entryComponents: [
    PronoDialogComponent
  ],
  exports: [],
  providers: [GooglePieChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
