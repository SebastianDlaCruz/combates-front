import { TestBed } from '@angular/core/testing';

import { AdapterSubmitService } from './adapter-submit.service';

describe('AdapterSubmitService', () => {
  let service: AdapterSubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdapterSubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
