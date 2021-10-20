import { NgModule } from '@angular/core';
import { LeaguesStateModule } from './leagues/leagues-state.module';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { PlayersStateModule } from './players/players-state.module';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const { type, ...payload } = action;
    const nextState = reducer(state, action);

    console.log('%cAction :', 'font-weight: bold', type);
    console.log('%c payload :', 'color: blue; font-weight: bold', payload);
    console.log('%c prev state :', 'color: #9E9E9E; font-weight: bold', state);
    console.log('%c next state :', 'color: #4CAF50; font-weight: bold', nextState);
    return nextState;
  };
}
export const metaReducersFactory = (production: boolean) => (!production ? [debug] : []);

@NgModule({
  imports: [
    StoreModule.forRoot({}, { metaReducers: metaReducersFactory(environment.production) }),
    EffectsModule.forRoot([]),
    LeaguesStateModule,
    PlayersStateModule,
  ],
})
export class NgrxStoreModule {}
