import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { leaguesFeatureKey, leaguesReducer, leagueTeamsFeatureKey, leagueTeamsReducer } from './leagues.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LeaguesEffects } from './leagues.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(leaguesFeatureKey, leaguesReducer),
    StoreModule.forFeature(leagueTeamsFeatureKey, leagueTeamsReducer),
    EffectsModule.forFeature([LeaguesEffects]),
  ],
})
export class LeaguesStateModule {}
