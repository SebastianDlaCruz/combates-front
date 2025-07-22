import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { urlBaseInterceptor } from './url-base.interceptor';

describe('urlBaseInterceptor', () => {

  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => urlBaseInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should add the base URL to the request', () => {

    const mockRequest = new HttpRequest('GET', '/some-endpoint');

    const mockHandler: HttpHandlerFn = (req) => {

      expect(req.url).toBe(`${environment.api}/some-endpoint`);

      return of(new HttpResponse({ status: 200 }));

    }

    interceptor(mockRequest, mockHandler).subscribe();

  });

});
