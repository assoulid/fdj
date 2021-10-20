import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesComponent } from './leagues.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchModule } from './search/search.module';
import { LeaguesListModule } from './leagues-list/leagues-list.module';

@NgModule({
  declarations: [LeaguesComponent],
  imports: [CommonModule, SearchModule, LeaguesListModule],
  exports: [LeaguesComponent],
})
export class LeaguesModule {}
