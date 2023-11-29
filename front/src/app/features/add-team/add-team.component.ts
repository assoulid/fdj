import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTeamComponent implements OnInit {
  readonly teamForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.teamForm = formBuilder.group({
      name: [null, Validators.required],
      players: formBuilder.array([]),
    });
  }

  get playersFormArray(): FormArray {
    return this.teamForm.get('players') as FormArray;
  }

  add(): void {
    const fg = this.formBuilder.group({
      player: [null, Validators.required],
    });

    this.playersFormArray.push(fg);
  }

  ngOnInit(): void {}
}
