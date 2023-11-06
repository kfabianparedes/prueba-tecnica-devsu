import { FormControl, Validators } from '@angular/forms';
import { getEnableErrorMessages, getErrorbyFormControl } from '../helpers/error-controls-helpers';
import { LOGO_ERROR_MESSAGES } from '../helpers/global-error-message';

export class LogoControl extends FormControl {

  constructor() {
    super('');
    this.settingLogoValidators();
  }

  private settingLogoValidators() {
    this.setValidators([
      Validators.required
    ]);
  }

  public get logoMessageError(): string {
    return getErrorbyFormControl(this, LOGO_ERROR_MESSAGES);
  }

  public get error(): boolean {
    return getEnableErrorMessages(this);
  }
}
