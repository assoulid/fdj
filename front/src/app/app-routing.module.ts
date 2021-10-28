import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './features/leagues/leagues.component';
import { NgModule } from '@angular/core';
import { PlayersComponent } from './features/players/players.component';
import { PlayersResolver } from './features/players/players.resolver';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { AddLeagueComponent } from './features/add-league/add-league.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'leagues',
    pathMatch: 'full',
  },
  {
    path: 'leagues',
    component: LeaguesComponent,
  },
  {
    path: 'leagues/add',
    component: AddLeagueComponent,
  },
  {
    path: 'teams/:id/players',
    component: PlayersComponent,
    resolve: {
      initialisation: PlayersResolver,
    },
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
