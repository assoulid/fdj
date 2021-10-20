import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LeaguesFacadeService } from '../../core/store/leagues/leagues-facade.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaguesComponent {
  constructor(public leaguesFacadeService: LeaguesFacadeService) {}

  searchLeagues(query: string): void {
    this.leaguesFacadeService.searchLeagues(query);
  }

  getLeagueTeams(id: string): void {
    this.leaguesFacadeService.getLeagueTeams(id);
  }
}
