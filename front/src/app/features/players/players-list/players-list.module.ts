import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersListComponent } from './players-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PlayersListComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatButtonModule, RouterModule, FontAwesomeModule],
  exports: [PlayersListComponent],
})
export class PlayersListModule {}
