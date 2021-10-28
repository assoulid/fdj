import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaguesFacadeService } from '../../core/store/leagues/leagues-facade.service';

@Component({
  selector: 'app-add-league',
  templateUrl: './add-league.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLeagueComponent {
  readonly leagueForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public leaguesFacadeService: LeaguesFacadeService) {
    this.leagueForm = formBuilder.group({
      name: [null, Validators.required],
    });
  }

  addLeague(): void {
    this.leaguesFacadeService.addLeague(this.leagueForm.value);
  }
}
