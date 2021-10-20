import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsListComponent } from './teams-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TeamsListComponent],
  imports: [CommonModule, RouterModule],
  exports: [TeamsListComponent],
})
export class TeamsListModule {}
