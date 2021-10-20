import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayersListModule } from './players-list/players-list.module';

@NgModule({
  declarations: [PlayersComponent],
  imports: [CommonModule, PlayersListModule],
  exports: [PlayersComponent],
})
export class PlayersModule {}
