import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TeamPlayersState } from '../../../core/store/players/players.reducer';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

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
export class PlayersListComponent implements OnInit {
  faChevronLeft = faChevronLeft;

  @Input() players: TeamPlayersState | null;

  constructor() {}

  ngOnInit(): void {}
}
