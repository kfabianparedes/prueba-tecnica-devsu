import { FormControl } from '@angular/forms';
import { IControlErrorMessages } from '../parameters/global-error-message';

export function getEnableErrorMessages(formControl: FormControl): boolean {
  const value = formControl.invalid && (formControl.touched || formControl.dirty);
  return value;
}

export function getErrorbyFormControl(formControl: FormControl, errorMessageArray: IControlErrorMessages): string {
  if (getEnableErrorMessages(formControl)) {
    if (formControl.errors) {
      const errorKeys = Object.keys(formControl.errors);
      const currentKey = errorKeys[0];
      return errorMessageArray[currentKey];
    }
  }
  return '';
}

export function resetControlHelper(control: FormControl) {
  control.setValue('');
  control.markAsUntouched();
  control.markAsPristine();
}