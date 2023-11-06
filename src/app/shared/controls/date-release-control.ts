import { FormControl, Validators } from '@angular/forms';
import { GenericValidator } from '../helpers/generic-validator';
import { RELEASE_DATE_ERROR_MESSAGES } from '../helpers/global-error-message';
import { getEnableErrorMessages, getErrorbyFormControl } from '../helpers/error-controls-helpers';

export class DateReleaseControl extends FormControl {
  constructor() {
    super('');
    this.setupDateReleaseValidators();
  }

  private setupDateReleaseValidators() {
    this.setValidators([
      Validators.required,
      GenericValidator.validateDateRelease
    ]);
  }

  public get dateReleaseMessageError(): string {
    return getErrorbyFormControl(this, RELEASE_DATE_ERROR_MESSAGES);
  }

  public get error(): boolean {
    return getEnableErrorMessages(this);
  }
}


