import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LeagueTeamsState } from '../../../core/store/leagues/leagues.reducer';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styles: [
    `
      img {
        width: 60%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsListComponent implements OnInit {
  @Input() teams: LeagueTeamsState | null;

  constructor() {}

  ngOnInit(): void {}
}
