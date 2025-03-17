import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateIdService {

  isEqual(idOne: string, idTwo: String) {
    return idOne === idTwo;
  };

}
