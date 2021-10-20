import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LeaguesActions } from './index';
import { selectLeagues, selectLeaguesState, selectLeagueTeams, selectLeagueTeamsState } from './leagues.selectors';

@Injectable({
  providedIn: 'root',
})
export class LeaguesFacadeService {
  leaguesState$ = this.store.pipe(select(selectLeaguesState));
  leagues$ = this.store.pipe(select(selectLeagues));
  teamsState$ = this.store.pipe(select(selectLeagueTeamsState));
  teams$ = this.store.pipe(select(selectLeagueTeams));

  constructor(private store: Store) {}

  searchLeagues(query: string): void {
    this.store.dispatch(LeaguesActions.searchLeagues({ query }));
  }

  getLeagueTeams(id: string): void {
    this.store.dispatch(LeaguesActions.getLeagueTeams({ id }));
  }
}
