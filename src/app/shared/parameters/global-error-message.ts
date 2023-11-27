export interface IControlErrorMessages {
  [key: string]: string;
}

export const ID_ERROR_MESSAGES: IControlErrorMessages = {
  required: "Ingresa ID del producto",
  minlength: "El ID del producto acepta mínimo 3 caracteres",
  maxlength: "El ID del producto acepta máximo 10 caracteres",
  validateCharactersWithoutSpace: "El ID del producto es inválido",
  idDuplicated: "El ID le pertenece a otro producto"
};

export const NAME_ERROR_MESSAGES: IControlErrorMessages = {
  required: "Ingresa tus nombres y apellidos",
  minlength: "La cantidad de caracteres mínima es 5",
  maxlength: "La cantidad de caracteres máxima es 10",
  validateCharacters: "El nombre es inválido",
};

export const DESCRIPTION_ERROR_MESSAGES: IControlErrorMessages = {
  required: "Ingresa descripción del producto",
  minlength: "La cantidad de caracteres mínima es 10",
  maxlength: "La cantidad de caracteres máxima es 200",
  validateCharactersAndNumbers: "La descripción es inválida",
};

export const LOGO_ERROR_MESSAGES: IControlErrorMessages = {
  required: "Ingresa la url de tu logo",
};

export const RELEASE_DATE_ERROR_MESSAGES: IControlErrorMessages = {
  required: "Ingresa la fecha de liberación",
  validateDateRelease: "La fecha es inválida ( Debe ser igual o mayor a la fecha de actual )",
};

export const REVISION_DATE_ERROR_MESSAGES: IControlErrorMessages = {
  required: "Ingresa la fecha de revisión",
  validateOneYearLater: "La fecha es inválida ( Debe ser un año después de la fecha de liberación )",
};