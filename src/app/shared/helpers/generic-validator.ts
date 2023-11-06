import { FormControl, Validators } from '@angular/forms';
import moment from 'moment';

const VALID_CHARACTER = /^[A-Za-zÀ-ÿ\u00f1\u00d1 ]+$/;
const VALID_CHARACTER_WITHOUT_SPACE = /^[A-Za-zÀ-ÿ\u00f1\u00d10-9-]+$/;
const VALID_NUMBERS = /^[0-9]*$/;
const VALID_CHARACTERS_AND_NUMBERS = /^[A-Za-zÀ-ÿ\u00f1\u00d10-9 -]*$/;

export class GenericValidator extends Validators {
  static validateCharacters(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0) {
      const matches = VALID_CHARACTER.test(control.value);
      return matches ? null : { validateCharacters: matches };
    } else {
      return null;
    }
  }

  static validateCharactersWithoutSpace(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0) {
      const matches = VALID_CHARACTER_WITHOUT_SPACE.test(control.value);
      return matches ? null : { validateCharactersWithoutSpace: matches };
    } else {
      return null;
    }
  }

  static validateNumbers(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0) {
      const matches = VALID_NUMBERS.test(control.value);
      return matches ? null : { validateNumbers: matches };
    } else {
      return null;
    }
  }

  static validateCharactersAndNumbers(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0) {
      const matches = VALID_CHARACTERS_AND_NUMBERS.test(control.value);
      return matches ? null : { validateCharactersAndNumbers: matches };
    } else {
      return null;
    }
  }

  static validateDateRelease(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0) {
      const currentDate = moment();
      const controlDate = moment(new Date(control.value));
      const validate = moment.duration(controlDate.diff(currentDate)).days() >= 0;
      return validate ? null : { validateDateRelease: true};
    } else {
      return null;
    }
  }
  
  static validateOneYearLater(control: FormControl, releaseDateControl: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0 && releaseDateControl.value && releaseDateControl.value.length > 0) {
      const controlDate = moment(new Date(control.value));
      const releaseDate = moment(new Date(releaseDateControl.value));
      const validateYear = moment.duration(controlDate.diff(releaseDate)).years() >= 1;
      return validateYear ? null : { validateOneYearLater: true }; 
    } else {
      return null;
    }
  }
}
