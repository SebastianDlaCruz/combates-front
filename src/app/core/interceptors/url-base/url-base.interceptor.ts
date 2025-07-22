import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

export const urlBaseInterceptor: HttpInterceptorFn = (req, next) => {

  const URL_BASE = environment.api;

  req = req.clone({
    url: `${URL_BASE}${req.url}`
  });
  return next(req);
};
