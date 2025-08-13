import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { errorHandlingInterceptor } from '@core/interceptors/error-handling/error-handling.interceptor';
import { routes } from './app.routes';
import { urlBaseInterceptor } from './core/interceptors/url-base/url-base.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([urlBaseInterceptor, errorHandlingInterceptor])
    )

  ]
};
