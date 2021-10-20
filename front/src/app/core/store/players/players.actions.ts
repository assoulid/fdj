import { createAction, props } from '@ngrx/store';
import { TeamPlayers } from '../../../features/models/mapped-types';

export const getTeamPlayers = createAction('[Players] get team players', props<{ id: string }>());
export const getTeamPlayersTeamsStarted = createAction('[Players] get team players started');
export const getTeamPlayersTeamsSuccess = createAction('[Players] get team players success', props<{ players: TeamPlayers }>());
export const getTeamPlayersTeamsError = createAction('[Players] get team players error', props<{ error: Error }>());
