import { League, Player, Team } from './models';

export type LeagueTeams = Pick<League, '_id'> & { leagueTeams: Pick<Team, 'id' | 'name' | 'thumbnail'>[] };

export type TeamPlayers = Pick<Team, 'id' | 'name'> & {
  teamPlayers: Pick<Player, 'name' | 'position' | 'thumbnail' | 'signin' | 'born'>[];
};
