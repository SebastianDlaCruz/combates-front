import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const validatorCorner = (nameInputOne: string, nameInputTwo: string): ValidatorFn => {

  return (formGroup: AbstractControl): ValidationErrors | null => {

    const controlOne = formGroup.get(nameInputOne);
    const controlTwo = formGroup.get(nameInputTwo);

    if (controlOne && controlTwo && controlOne.value === controlTwo.value) {
      return { sameSelect: true }
    }
    return null;

  }

}
