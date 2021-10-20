import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PlayersFacadeService } from '../../core/store/players/players-facade.service';

@Injectable()
export class PlayersResolver implements Resolve<boolean> {
  constructor(private playersFacadeService: PlayersFacadeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.playersFacadeService.getTeamPlayers(route.params.id);
    return true;
  }
}
