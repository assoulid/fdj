import { createFeatureSelector, createSelector } from '@ngrx/store';
import { teamPlayersFeatureKey, TeamPlayersState } from './players.reducer';

export const selectTeamPlayersState = createFeatureSelector<TeamPlayersState>(teamPlayersFeatureKey);

export const selectTeamPlayers = createSelector(selectTeamPlayersState, (state) => state.data.teamPlayers);
