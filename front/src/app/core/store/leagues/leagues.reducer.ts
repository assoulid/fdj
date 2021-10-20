import { Loadable } from '../../../shared/loadable/loadable';
import { League } from '../../../features/models/models';
import { createReducer, on } from '@ngrx/store';
import { LeaguesActions } from './index';
import { LeagueTeams } from '../../../features/models/mapped-types';

export const leaguesFeatureKey = 'leagues';
export const leagueTeamsFeatureKey = 'leagueTeams';

export type LeaguesState = Loadable<League[]>;
export type LeagueTeamsState = Loadable<LeagueTeams>;

export const leaguesInitialState: LeaguesState = Loadable.initialState<League[]>([]);
export const leagueTeamsInitialState: LeagueTeamsState = Loadable.initialState<LeagueTeams>({
  _id: '',
  leagueTeams: [],
});

export const leaguesReducer = createReducer(
  leaguesInitialState,
  on(LeaguesActions.searchLeaguesStarted, (state, action) => Loadable.loading(leaguesInitialState)),
  on(LeaguesActions.searchLeaguesSuccess, (state, { leagues }) => Loadable.success(leagues)),
  on(LeaguesActions.searchLeaguesError, (state, { error }) => Loadable.error(error))
);

export const leagueTeamsReducer = createReducer(
  leagueTeamsInitialState,
  on(LeaguesActions.getLeagueTeamsStarted, (state, action) => Loadable.loading(leagueTeamsInitialState)),
  on(LeaguesActions.getLeagueTeamsSuccess, (state, { teams }) => Loadable.success(teams)),
  on(LeaguesActions.getLeagueTeamsError, (state, { error }) => Loadable.error(error))
);
