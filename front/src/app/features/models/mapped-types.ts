import { League, Player, Team } from './models';

export type LeagueTeamsType = Pick<Team, 'id' | 'name' | 'thumbnail'>[];

export type LeagueTeams = Pick<League, '_id'> & { leagueTeams: LeagueTeamsType };

export type TeamPlayersType = Pick<Player, 'name' | 'position' | 'thumbnail' | 'signin' | 'born'>[];

export type TeamPlayers = Pick<Team, 'id' | 'name'> & {
  teamPlayers: TeamPlayersType;
};
