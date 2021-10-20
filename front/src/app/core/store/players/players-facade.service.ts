import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectTeamPlayers, selectTeamPlayersState } from './players.selectors';
import { PlayerActions } from './index';

@Injectable({
  providedIn: 'root',
})
export class PlayersFacadeService {
  teamPlayersState$ = this.store.pipe(select(selectTeamPlayersState));
  teamPlayers$ = this.store.pipe(select(selectTeamPlayers));

  constructor(private store: Store) {}

  getTeamPlayers(id: string): void {
    this.store.dispatch(PlayerActions.getTeamPlayers({ id }));
  }
}
