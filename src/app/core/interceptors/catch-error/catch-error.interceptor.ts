import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ControlErrorService } from '@core/services/control-error/control-error.service';
import { catchError, throwError } from 'rxjs';

export const catchErrorInterceptor: HttpInterceptorFn = (req, next) => {

  const controlError$ = inject(ControlErrorService);

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {


      controlError$.setError(error.error)

      return throwError(() => new Error('error'));
    })

  );
};
