import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PlayersFacadeService } from '../../core/store/players/players-facade.service';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styles: [
    `
      .name {
        font-weight: bold;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersComponent {
  faChevronLeft = faChevronLeft;

  constructor(public playersFacadeService: PlayersFacadeService) {}
}
