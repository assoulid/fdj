import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { controlValueAccessorProvidersFactory } from '../../../shared/helpers/form.helpers';
import { BaseControlValueAccessor } from '../../../shared/forms/base-control-value-accessor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  providers: [...controlValueAccessorProvidersFactory(AddPlayerComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPlayerComponent extends BaseControlValueAccessor implements OnInit {
  readonly playerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();

    this.playerForm = formBuilder.group({
      name: [null, Validators.required],
    });
  }

  getForm(): FormGroup {
    return this.playerForm;
  }

  ngOnInit(): void {}
}
