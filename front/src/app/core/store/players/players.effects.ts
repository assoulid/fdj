import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlayersService } from '../../../features/players/players.service';
import { PlayerActions } from './index';
import { catchError, mergeMap, startWith, switchMap } from 'rxjs/operators';

@Injectable()
export class PlayersEffects {
  constructor(private actions$: Actions, private playersService: PlayersService) {}

  getTeamPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerActions.getTeamPlayers),
      switchMap(({ id }) =>
        this.playersService.getTeamPlayers(id).pipe(
          mergeMap((players) => [PlayerActions.getTeamPlayersTeamsSuccess({ players })]),
          startWith(PlayerActions.getTeamPlayersTeamsStarted()),
          catchError((error: Error) => [PlayerActions.getTeamPlayersTeamsError({ error })])
        )
      )
    )
  );
}
