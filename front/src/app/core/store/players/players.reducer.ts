import { Loadable } from '../../../shared/loadable/loadable';
import { TeamPlayers } from '../../../features/models/mapped-types';
import { createReducer, on } from '@ngrx/store';
import { PlayerActions } from './index';

export const teamPlayersFeatureKey = 'teamPlayers';

export type TeamPlayersState = Loadable<TeamPlayers>;

export const teamPlayersInitialState: TeamPlayersState = Loadable.initialState<TeamPlayers>({
  _id: '',
  name: '',
  teamPlayers: [],
});

export const teamPlayersReducer = createReducer(
  teamPlayersInitialState,
  on(PlayerActions.getTeamPlayersTeamsStarted, (state, action) => Loadable.loading(state)),
  on(PlayerActions.getTeamPlayersTeamsSuccess, (state, { players }) => Loadable.success(players)),
  on(PlayerActions.getTeamPlayersTeamsError, (state, { error }) => Loadable.error(error))
);
