import { Team } from './models';

export type LeagueTeams = { _id: string; leagueTeams: Pick<Team, 'name' | 'thumbnail'>[] };
