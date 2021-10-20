import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsListComponent } from './teams-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TeamsListComponent],
  imports: [CommonModule, MatProgressSpinnerModule, RouterModule],
  exports: [TeamsListComponent],
})
export class TeamsListModule {}
