import { FormControl, Validators } from '@angular/forms';
import { getEnableErrorMessages, getErrorbyFormControl } from '../helpers/error-controls-helpers';
import { GenericValidator } from '../helpers/generic-validator';
import { CONFIG_PRODUCT_VALIDATIONS } from '../models/global';
import { DESCRIPTION_ERROR_MESSAGES } from '../helpers/global-error-message';

export class DescriptionControl extends FormControl {

  constructor() {
    super('');
    this.settingDescriptionValidators();
  }

  private settingDescriptionValidators() {
    this.setValidators([
      Validators.required,
      Validators.minLength(CONFIG_PRODUCT_VALIDATIONS.MIN_LENGHT_DESCRIPTION),
      Validators.maxLength(CONFIG_PRODUCT_VALIDATIONS.MAX_LENGHT_DESCRIPTION),
      GenericValidator.validateCharactersAndNumbers
    ]);
  }

  public get descriptionMessageError(): string {
    return getErrorbyFormControl(this, DESCRIPTION_ERROR_MESSAGES);
  }

  public get error(): boolean {
    return getEnableErrorMessages(this);
  }
}
