import {LeagueTeams, TeamPlayers} from "../src/app/features/models/mapped-types";
import db from './db.json';

// @ts-ignore
export const playersMock: TeamPlayers = db['players']
// @ts-ignore
export const teamsMock: LeagueTeams = db['teams']
