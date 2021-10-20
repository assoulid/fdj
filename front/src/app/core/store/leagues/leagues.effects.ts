import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LeaguesService } from '../../../features/leagues/leagues.service';
import { LeaguesActions } from './index';
import { catchError, mergeMap, startWith, switchMap } from 'rxjs/operators';

@Injectable()
export class LeaguesEffects {
  constructor(private actions$: Actions, private leaguesService: LeaguesService) {}

  searchLeagues$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeaguesActions.searchLeagues),
      switchMap(({ query }) =>
        this.leaguesService.searchLeagues(query).pipe(
          mergeMap((leagues) => [LeaguesActions.searchLeaguesSuccess({ leagues })]),
          startWith(LeaguesActions.searchLeaguesStarted()),
          catchError((error: Error) => [LeaguesActions.searchLeaguesError({ error })])
        )
      )
    )
  );

  getLeagueTeams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeaguesActions.getLeagueTeams),
      switchMap(({ id }) =>
        this.leaguesService.getLeagueTeams(id).pipe(
          mergeMap((teams) => [LeaguesActions.getLeagueTeamsSuccess({ teams })]),
          startWith(LeaguesActions.getLeagueTeamsStarted()),
          catchError((error: Error) => [LeaguesActions.getLeagueTeamsError({ error })])
        )
      )
    )
  );
}
