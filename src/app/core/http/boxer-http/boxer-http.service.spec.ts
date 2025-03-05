import { TestBed } from '@angular/core/testing';

import { BoxerHttpService } from './boxer-http.service';

describe('BoxerHttpService', () => {
  let service: BoxerHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxerHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
