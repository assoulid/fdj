import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './features/leagues/leagues.component';
import { NgModule } from '@angular/core';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
