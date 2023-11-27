import { FormControl, Validators } from '@angular/forms';
import { getEnableErrorMessages, getErrorbyFormControl } from '../helpers/error-controls-helpers';
import { GenericValidator } from '../helpers/generic-validator';
import { CONFIG_PRODUCT_VALIDATIONS } from '../parameters/global';
import { NAME_ERROR_MESSAGES } from '../parameters/global-error-message';

export class NameControl extends FormControl {

  constructor() {
    super('');
    this.settingNameValidators();
  }

  private settingNameValidators() {
    this.setValidators([
      Validators.required,
      Validators.minLength(CONFIG_PRODUCT_VALIDATIONS.MIN_LENGHT_NAME),
      Validators.maxLength(CONFIG_PRODUCT_VALIDATIONS.MAX_LENGHT_NAME),
      GenericValidator.validateCharacters
    ]);
  }

  public get nameMessageError(): string {
    return getErrorbyFormControl(this, NAME_ERROR_MESSAGES);
  }
  public get error(): boolean {
    return getEnableErrorMessages(this);
  }
}
