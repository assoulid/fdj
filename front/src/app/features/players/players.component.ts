import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PlayersFacadeService } from '../../core/store/players/players-facade.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersComponent implements OnInit {
  constructor(public playersFacadeService: PlayersFacadeService) {}

  ngOnInit(): void {}
}
