import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PronoFormComponent } from './component/bet/prono-form/prono-form.component';
import { PronoListComponent } from './component/bet/prono-list/prono-list.component';
import { PronoStatsComponent } from './component/stats/prono-stats/prono-stats.component';
import { PieChartComponent } from './chart/piechart.component';
import { PronoDialogComponent } from './component/bet/prono-dialog/prono-dialog.component';
import { LoginComponent } from './component/user/login/login.component';

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
import { AuthGuard } from './guard/auth.guard';
import { PronoRankingComponent } from './component/ranking/prono-ranking/prono-ranking.component';
import { PronoInfoComponent } from './component/other/prono-info/prono-info.component';
import { GENERAL, MONTH, JOURNEY, MOYENNE, PARTICIPATION, HISTORY_WEEK, HISTORY_MONTH, HISTORY_STATS, HISTORY_PRONO } from './const/constants';
import { RegisterComponent } from './component/user/register/register.component';
import { NavComponent } from './nav/nav.component';
import { PronoListParticipationDirective } from './prono-list-participation.directive';
import { PronoRankingMoyenneComponent } from './component/ranking/prono-ranking-moyenne/prono-ranking-moyenne.component';
import { PronoRankingParticipationComponent } from './component/ranking/prono-ranking-participation/prono-ranking-participation.component';
import { PronoRankingHistoryComponent } from './component/ranking/prono-ranking-history/prono-ranking-history.component';
import { PronoStatsHistoryComponent } from './component/stats/prono-stats-history/prono-stats-history.component';
import { PronoListHistoryComponent } from './component/bet/prono-list-history/prono-list-history.component';
import { getFrenchPaginatorIntl } from './french-paginator-intl';
import { PronoCdmGroupComponent } from './component/cdm/prono-cdm-group/prono-cdm-group.component';
import { PronoCdmGroupListComponent } from './component/cdm/prono-cdm-group-list/prono-cdm-group-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PronoCdmKnockoutComponent } from './component/cdm/prono-cdm-knockout/prono-cdm-knockout.component';
import { PronoFormResultComponent } from './component/admin/prono-form-result/prono-form-result.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UserInfoComponent } from './component/user/user-info/user-info.component';
import { UserResetPasswordComponent } from './component/user/user-reset-password/user-reset-password.component';
import { UserResetPasswordDialogComponent } from './component/user/user-reset-password.-dialog/user-reset-password-dialog.component';
import {CalendarModule} from 'primeng/calendar';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { PronoCdmRankingComponent } from './component/cdm/prono-cdm-ranking/prono-cdm-ranking.component';
import { AdminLeagueRankingComponent } from './component/admin/admin-league-ranking/admin-league-ranking.component';
import { PronoHallOfFameComponent } from './component/other/prono-hall-of-fame/prono-hall-of-fame.component';
import { DVOrgaComponent } from './component/other/dv-orga/dv-orga.component';
import { AdminGuard } from './guard/admin.guard';
import { GuestGuard } from './guard/guest.guard';


const appRoutes: Routes = [
  { path: '', component: PronoFormComponent },
  { path: 'pronostics', component: PronoListComponent },
  { path: 'pronostics/:id', component: PronoListComponent },
  { path: 'stats', component: PronoStatsComponent },
  { path: 'infos', component: PronoInfoComponent },
  { path: 'halloffame', component: PronoHallOfFameComponent },
  { path: GENERAL, component: PronoRankingComponent },
  { path: MONTH, component: PronoRankingComponent },
  { path: JOURNEY, component: PronoRankingComponent },
  { path: 'moyenne', component: PronoRankingMoyenneComponent },
  { path: 'participation', component: PronoRankingParticipationComponent },
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [GuestGuard]},
  { path: HISTORY_MONTH, component: PronoRankingHistoryComponent},
  { path: HISTORY_WEEK, component: PronoRankingHistoryComponent},
  { path: HISTORY_STATS, component: PronoStatsHistoryComponent},
  { path: HISTORY_PRONO, component: PronoListHistoryComponent},
  { path: 'cdm', component: PronoCdmGroupComponent},
  { path: 'cdm/list', component: PronoCdmGroupListComponent},
  { path: 'cdm/knockout', component: PronoCdmKnockoutComponent},
  { path: 'cdm/rank', component: PronoCdmRankingComponent},
  { path: 'admin/result', component: PronoFormResultComponent, canActivate: [AdminGuard]},
  { path: 'user/info', component: UserInfoComponent, canActivate: [AuthGuard]},
  { path: 'user/reset', component: UserResetPasswordComponent},
  { path: 'admin/ranking', component: AdminLeagueRankingComponent, canActivate: [AdminGuard]},
  { path: 'dv', component: DVOrgaComponent}
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
    PronoCdmRankingComponent,
    PronoFormResultComponent,
    MyNavComponent,
    UserInfoComponent,
    UserResetPasswordComponent,
    UserResetPasswordDialogComponent,
    AdminLeagueRankingComponent,
    PronoHallOfFameComponent,
    DVOrgaComponent
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
    CalendarModule,
    OrderListModule,
    OrganizationChartModule,
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
    PronoDialogComponent,
    UserResetPasswordDialogComponent
  ],
  exports: [],
  providers: [GooglePieChartService, AuthService, AuthGuard, AdminGuard, GuestGuard,
              { provide: MatPaginatorIntl, useValue: getFrenchPaginatorIntl() }],
  bootstrap: [AppComponent]
})
export class AppModule { }
