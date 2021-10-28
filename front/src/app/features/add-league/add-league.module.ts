import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeagueComponent } from './add-league.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AddLeagueComponent],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  exports: [AddLeagueComponent],
})
export class AddLeagueModule {}
