import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Pronostic } from '../models/pronostic';
import { Matchday } from '../models/matchday';

@Component({
  selector: 'app-prono-list',
  templateUrl: './prono-list.component.html',
  styleUrls: ['./prono-list.component.css']
})
export class PronoListComponent implements OnInit {
  pronostics: Pronostic[];
  matchday;
  journey: Matchday;
  //url = 'https://pronorest.herokuapp.com/api/';
   url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url.concat('fixtures/current/'))
    .toPromise().then(m => {
        this.matchday = Number(m);
      }
    ).then(r => {
      this.http.get<Pronostic[]>(this.url.concat('pronostic/').concat(this.matchday))
      .toPromise().then(data => {
          // Read the result field from the JSON response.
          this.pronostics = data;
        }
      );
    }
    );

    this.http.get(this.url.concat('fixtures/'))
    .toPromise().then(data => {
        // Read the result field from the JSON response.
        this.journey = new Matchday();
        for (let i = 1; i < 11; i ++) {
          const fixture = data[i-1];
          const j = fixture['home'] + ' - ' + fixture['away'];
          this.journey.matchday.push(j);
        }
      }
    );
  }

}
