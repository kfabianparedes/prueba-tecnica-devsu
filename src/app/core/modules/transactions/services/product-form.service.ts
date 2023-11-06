import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateReleaseControl } from '../../../../shared/controls/date-release-control';
import { DateRevisionControl } from '../../../../shared/controls/date-revision-control';
import { DescriptionControl } from '../../../../shared/controls/description-control';
import { IdentificatorControl } from '../../../../shared/controls/id-control';
import { LogoControl } from '../../../../shared/controls/logo-control';
import { NameControl } from '../../../../shared/controls/name-control';

@Injectable()
export class ProductFormService {
  public form: FormGroup;
  private _idControl = new IdentificatorControl();
  private _nameControl = new NameControl();
  private _descriptionControl = new DescriptionControl();
  private _logoControl = new LogoControl();
  private _dateReleaseControl = new DateReleaseControl();
  private _dateRevisionControl = new DateRevisionControl(this._dateReleaseControl);


  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: this._idControl,
      name: this._nameControl,
      description: this._descriptionControl,
      logo: this._logoControl,
      date_release: this._dateReleaseControl,
      date_revision: this._dateRevisionControl
    });
  }

  public get idControl() {
    return this.form.get('id') as IdentificatorControl;
  }

  public get nameControl() {
    return this.form.get('name') as NameControl;
  }

  public get descriptionControl() {
    return this.form.get('description') as DescriptionControl;
  }

  public get logoControl() {
    return this.form.get('logo') as LogoControl;
  }

  public get dateReleaseControl() {
    return this.form.get('date_release') as DateReleaseControl;
  }
  
  public get dateRevisionControl() {
    return this.form.get('date_revision') as DateRevisionControl;
  }

  public resetForm(): void {
    this.idControl.setValue('');
    this.nameControl.setValue('');
    this.descriptionControl.setValue('');
    this.logoControl.setValue('');
    this.dateReleaseControl.setValue('');
    this.dateRevisionControl.setValue('');
  }
  
}
