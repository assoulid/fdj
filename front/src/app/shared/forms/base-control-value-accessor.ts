import { AfterViewInit, Component } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { startWith } from 'rxjs/operators';

@Component({ template: '' })
export abstract class BaseControlValueAccessor implements ControlValueAccessor, Validator, AfterViewInit {
  public onTouched: () => void;
  public onChange: (val: any) => void;

  abstract getForm(): FormGroup;

  ngAfterViewInit(): void {
    this.getForm()
      .valueChanges.pipe(startWith(this.getForm().getRawValue()))
      .subscribe(() => this.onChange(this.getForm().getRawValue()));
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  registerOnValidatorChange(fn: () => void): void {}

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.getForm().disable();
    } else {
      this.getForm().enable();
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.getForm().valid || this.getForm().disabled
      ? null
      : // @ts-ignore
      Boolean(this.getForm().errors) && Object.keys(this.getForm().errors).length
      ? this.getForm().errors
      : { valid: false };
  }

  writeValue(val: any): void {
    if (Boolean(val)) {
      this.getForm().patchValue(val, { emitEvent: false });
    }
  }
}
