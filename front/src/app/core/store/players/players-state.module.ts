import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { teamPlayersFeatureKey, teamPlayersReducer } from './players.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PlayersEffects } from './players.effects';

@NgModule({
  imports: [StoreModule.forFeature(teamPlayersFeatureKey, teamPlayersReducer), EffectsModule.forFeature([PlayersEffects])],
})
export class PlayersStateModule {}
