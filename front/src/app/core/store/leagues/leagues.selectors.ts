import { createFeatureSelector, createSelector } from '@ngrx/store';
import { leaguesFeatureKey, LeaguesState, leagueTeamsFeatureKey, LeagueTeamsState } from './leagues.reducer';

export const selectLeaguesState = createFeatureSelector<LeaguesState>(leaguesFeatureKey);

export const selectLeagues = createSelector(selectLeaguesState, (state) => state.data);

export const selectLeagueTeamsState = createFeatureSelector<LeagueTeamsState>(leagueTeamsFeatureKey);

export const selectLeagueTeams = createSelector(selectLeagueTeamsState, (state) => state.data.leagueTeams);
