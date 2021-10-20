import { createAction, props } from '@ngrx/store';
import { League } from '../../../features/models/models';
import { LeagueTeams } from '../../../features/models/mapped-types';

export const searchLeagues = createAction('[Leagues] search leagues', props<{ query: string }>());
export const searchLeaguesStarted = createAction('[Leagues] search leagues started');
export const searchLeaguesSuccess = createAction('[Leagues] search leagues success', props<{ leagues: League[] }>());
export const searchLeaguesError = createAction('[Leagues] search leagues error', props<{ error: Error }>());

export const getLeagueTeams = createAction('[Leagues] get league teams', props<{ id: string }>());
export const getLeagueTeamsStarted = createAction('[Leagues] get league teams started');
export const getLeagueTeamsSuccess = createAction('[Leagues] get league teams success', props<{ teams: LeagueTeams }>());
export const getLeagueTeamsError = createAction('[Leagues] get league teams error', props<{ error: Error }>());
