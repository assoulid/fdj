import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsListComponent } from './teams-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [TeamsListComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [TeamsListComponent],
})
export class TeamsListModule {}
