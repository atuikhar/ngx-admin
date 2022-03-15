import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class NameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0)
      return { cannotContainSpace: true };
  }
}

export const AdultValidator =
  (maxAge: number): ValidatorFn =>
  (control) =>
    new Date().getFullYear() - new Date(control.value).getFullYear() < maxAge
      ? { Young: { maxAge } }
      : null;
//   new Date().getFullYear() - new Date(control.value).getFullYear() <
//     futureAge
// ? { Future: { futureAge } }
// : null;

export const AgeValidator =
  (minAge: number): ValidatorFn =>
  (control) =>
    new Date().getFullYear() - new Date(control.value).getFullYear() <= minAge
      ? { Future: { minAge } }
      : null;
