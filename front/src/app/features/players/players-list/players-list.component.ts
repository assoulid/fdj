import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TeamPlayersType } from '../../models/mapped-types';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styles: [
    `
      img {
        width: 100%;
      }
      .player-row {
        background-color: #b5b5b5;
      }
      .name {
        font-weight: bold;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersListComponent {
  @Input() players: TeamPlayersType | null;

  constructor() {}
}
