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

import { GooglePieChartService } from './chart/google-pie-chart.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { PronoRankingComponent } from './prono-ranking/prono-ranking.component';
import { PronoInfoComponent } from './prono-info/prono-info.component';
import { GENERAL, MONTH, JOURNEY, MOYENNE, PARTICIPATION } from './const/constants';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { PronoListParticipationDirective } from './prono-list-participation.directive';
import { PronoRankingMoyenneComponent } from './prono-ranking-moyenne/prono-ranking-moyenne.component';
import { PronoRankingParticipationComponent } from './prono-ranking-participation/prono-ranking-participation.component';

const appRoutes: Routes = [
  { path: '', component: PronoFormComponent },
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
  { path: 'register', component: RegisterComponent}
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
    PronoRankingParticipationComponent
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
    )
  ],
  entryComponents: [
    PronoDialogComponent
  ],
  exports: [],
  providers: [GooglePieChartService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
