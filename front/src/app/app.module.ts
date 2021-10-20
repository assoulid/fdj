import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LeaguesModule } from './features/leagues/leagues.module';
import { NgrxStoreModule } from './core/store/ngrx-store.module';
import { EnvironmentModule } from '../environments/environment.module';
import { PlayersModule } from './features/players/players.module';
import { PlayersResolver } from './features/players/players.resolver';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LeaguesModule,
    NgrxStoreModule,
    EnvironmentModule,
    PlayersModule,
    FontAwesomeModule,
  ],
  providers: [PlayersResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
