import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LeaguesModule } from './features/leagues/leagues.module';
import { EnvironmentModule } from '../environments/environment.module';
import { PlayersModule } from './features/players/players.module';
import { PlayersResolver } from './features/players/players.resolver';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundModule } from './features/page-not-found/page-not-found.module';
import { CoreModule } from './core/core.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AddLeagueModule } from './features/add-league/add-league.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LeaguesModule,
    CoreModule,
    EnvironmentModule,
    PlayersModule,
    FontAwesomeModule,
    PageNotFoundModule,
    NgxSpinnerModule,
    AddLeagueModule,
  ],
  providers: [PlayersResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
