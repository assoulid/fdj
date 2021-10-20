import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '../../../environments/environment.module';
import { Environment } from '../../../environments/environment.model';
import { Observable } from 'rxjs';
import { TeamPlayers } from '../models/mapped-types';
import * as URI from 'urijs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor(private http: HttpClient, @Inject(ENVIRONMENT) private env: Environment) {}

  getTeamPlayers(id: string): Observable<TeamPlayers> {
    return this.http.get<TeamPlayers>(URI(this.env.config.apiBaseUrl).segment('teams').segment(id).segment('players').toString());
  }
}
