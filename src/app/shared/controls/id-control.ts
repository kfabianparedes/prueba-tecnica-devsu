import { FormControl, Validators } from '@angular/forms';
import { getEnableErrorMessages, getErrorbyFormControl } from '../helpers/error-controls-helpers';
import { GenericValidator } from '../helpers/generic-validator';
import { CONFIG_PRODUCT_VALIDATIONS } from '../models/global';
import { ID_ERROR_MESSAGES } from '../helpers/global-error-message';

export class IdentificatorControl extends FormControl {

  constructor() {
    super('');
    this.settingIdentificatorValidators();
  }

  private settingIdentificatorValidators() {
    this.setValidators([
      Validators.required,
      Validators.minLength(CONFIG_PRODUCT_VALIDATIONS.MIN_LENGHT_ID),
      Validators.maxLength(CONFIG_PRODUCT_VALIDATIONS.MAX_LENGHT_ID),
      GenericValidator.validateCharactersWithoutSpace
    ]);
  }

  public get identificatorMessageError(): string {
    return getErrorbyFormControl(this, ID_ERROR_MESSAGES);
  }

  public get error(): boolean {
    return getEnableErrorMessages(this);
  }
}
