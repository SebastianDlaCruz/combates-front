import { AbstractControl, ValidationErrors } from "@angular/forms";

export const negativeNumberValidator = (control: AbstractControl): ValidationErrors | null => {

  const value = control.value;

  return parseFloat(value) > 0 ? null : { negativeNumber: true };
}
