import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './features/leagues/leagues.component';
import { NgModule } from '@angular/core';
import { PlayersComponent } from './features/players/players.component';
import { PlayersResolver } from './features/players/players.resolver';

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
    path: 'teams/:id/players',
    component: PlayersComponent,
    resolve: {
      initialisation: PlayersResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
