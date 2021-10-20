import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '../../../environments/environment.module';
import { Environment } from '../../../environments/environment.model';
import { Observable } from 'rxjs';
import { League } from '../models/models';
import * as URI from 'urijs';
import { LeagueTeams } from '../models/mapped-types';

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  constructor(private http: HttpClient, @Inject(ENVIRONMENT) private env: Environment) {}

  searchLeagues(query: string): Observable<League[]> {
    return this.http.get<League[]>(URI(this.env.config.apiBaseUrl).segment('leagues').segment('filter').segment(query).toString());
  }

  getLeagueTeams(id: string): Observable<LeagueTeams> {
    return this.http.get<LeagueTeams>(URI(this.env.config.apiBaseUrl).segment('leagues').segment(id).segment('teams').toString());
  }
}
