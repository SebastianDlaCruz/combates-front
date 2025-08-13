import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const errors: { [key: string]: string } = {
  error_create_school: 'Error al crear la escuela',
  error_school_already_exists: "La escuela ya existe",
  error_delete_school: 'Error al eliminar la escuela',
  error_update_school: 'Error al actualizar la escuela',
  school_not_found: 'Escuela no encontrada',
  error_create_coach: 'Error al crear el coach',
  error_coach_already_exists: 'El coach ya existe',
  error_update_boxer: 'Error al actualizar el boxer',
}

@Injectable({
  providedIn: 'root'
})
export class MessageErrorService {

  private massage$ = new BehaviorSubject("");

  setCodeError(code: string) {
    this.massage$.next(errors[code] || '');
  }

  getMessageError() {
    return this.massage$.asObservable();
  }

}
