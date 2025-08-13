import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageErrorService } from '@core/services/message-error/message-error.service';
import { catchError, throwError } from 'rxjs';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {

  const messageError = inject(MessageErrorService);

  return next(req).pipe(

    catchError((err: HttpErrorResponse) => {
      console.log(err.error);
      messageError.setCodeError(err.error.code);
      return throwError(() => new Error('error'));
    })

  );
};
