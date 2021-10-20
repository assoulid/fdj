import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersListComponent } from './players-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlayersListComponent],
  imports: [CommonModule, RouterModule],
  exports: [PlayersListComponent],
})
export class PlayersListModule {}
