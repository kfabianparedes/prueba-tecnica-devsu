import { FormControl, Validators } from "@angular/forms";
import { getEnableErrorMessages, getErrorbyFormControl } from "../helpers/error-controls-helpers";
import { REVISION_DATE_ERROR_MESSAGES } from "../parameters/global-error-message";
import { GenericValidator } from "../helpers/generic-validator";

export class DateRevisionControl extends FormControl {
  constructor(releaseDateControl: FormControl) { // Agrega releaseDateControl como parámetro
    super('');
    this.setupDateRevisionValidators(releaseDateControl);
  }

  private setupDateRevisionValidators(releaseDateControl: FormControl) {
    this.setValidators([
      Validators.required,
      (control: FormControl) => GenericValidator.validateOneYearLater(control, releaseDateControl)
    ]);
  }
  public get dateRevisionMessageError(): string {
    return getErrorbyFormControl(this, REVISION_DATE_ERROR_MESSAGES);
  }

  public get error(): boolean {
    return getEnableErrorMessages(this);
  }
}