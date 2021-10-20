import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayersListModule } from './players-list/players-list.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [PlayersComponent],
  imports: [CommonModule, PlayersListModule, MatButtonModule, RouterModule, FontAwesomeModule, MatProgressSpinnerModule],
  exports: [PlayersComponent],
})
export class PlayersModule {}
