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
import { LoginComponent } from './login/login.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatCardModule, MatSnackBarModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorIntl, MatSidenavModule, MatListModule} from '@angular/material';

import { GooglePieChartService } from './chart/google-pie-chart.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { PronoRankingComponent } from './prono-ranking/prono-ranking.component';
import { PronoInfoComponent } from './prono-info/prono-info.component';
import { GENERAL, MONTH, JOURNEY, MOYENNE, PARTICIPATION, HISTORY_WEEK, HISTORY_MONTH, HISTORY_STATS, HISTORY_PRONO } from './const/constants';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { PronoListParticipationDirective } from './prono-list-participation.directive';
import { PronoRankingMoyenneComponent } from './prono-ranking-moyenne/prono-ranking-moyenne.component';
import { PronoRankingParticipationComponent } from './prono-ranking-participation/prono-ranking-participation.component';
import { PronoRankingHistoryComponent } from './prono-ranking-history/prono-ranking-history.component';
import { PronoStatsHistoryComponent } from './prono-stats-history/prono-stats-history.component';
import { PronoListHistoryComponent } from './prono-list-history/prono-list-history.component';
import { getFrenchPaginatorIntl } from './french-paginator-intl';
import { PronoCdmGroupComponent } from './prono-cdm-group/prono-cdm-group.component';
import { PronoCdmGroupListComponent } from './prono-cdm-group-list/prono-cdm-group-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PronoCdmKnockoutComponent } from './prono-cdm-knockout/prono-cdm-knockout.component';
import { PronoFormResultComponent } from './prono-form-result/prono-form-result.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

const appRoutes: Routes = [
  //{ path: '', component: PronoFormComponent },
  { path: '', redirectTo: '/cdm', pathMatch: 'full' },
  { path: 'pronostics', component: PronoListComponent },
  { path: 'pronostics/:id', component: PronoListComponent },
  { path: 'stats', component: PronoStatsComponent },
  { path: 'infos', component: PronoInfoComponent },
  { path: GENERAL, component: PronoRankingComponent },
  { path: MONTH, component: PronoRankingComponent },
  { path: JOURNEY, component: PronoRankingComponent },
  { path: 'moyenne', component: PronoRankingMoyenneComponent },
  { path: 'participation', component: PronoRankingParticipationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: HISTORY_MONTH, component: PronoRankingHistoryComponent},
  { path: HISTORY_WEEK, component: PronoRankingHistoryComponent},
  { path: HISTORY_STATS, component: PronoStatsHistoryComponent},
  { path: HISTORY_PRONO, component: PronoListHistoryComponent},
  { path: 'cdm', component: PronoCdmGroupComponent},
  { path: 'cdm/list', component: PronoCdmGroupListComponent},
  { path: 'cdm/knockout', component: PronoCdmKnockoutComponent},
  { path: 'result', component: PronoFormResultComponent}
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
    PronoInfoComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    PronoListParticipationDirective,
    PronoRankingMoyenneComponent,
    PronoRankingParticipationComponent,
    PronoRankingHistoryComponent,
    PronoStatsHistoryComponent,
    PronoListHistoryComponent,
    PronoCdmGroupComponent,
    PronoCdmGroupListComponent,
    PronoCdmKnockoutComponent,
    PronoFormResultComponent,
    MyNavComponent
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
    MatCardModule,
    MatSnackBarModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  entryComponents: [
    PronoDialogComponent
  ],
  exports: [],
  providers: [GooglePieChartService, AuthService, AuthGuard,
              { provide: MatPaginatorIntl, useValue: getFrenchPaginatorIntl() }],
  bootstrap: [AppComponent]
})
export class AppModule { }
