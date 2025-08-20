import { TestBed } from '@angular/core/testing';

import { BoxerRelatedDataService } from './boxer-related-data.service';

describe('BoxerRelatedDataService', () => {
  let service: BoxerRelatedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxerRelatedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
