import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { LeagueTeamsType } from '../../models/mapped-types';

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
export class TeamsListComponent {
  @Input() teams: LeagueTeamsType | null;

  constructor() {}
}
