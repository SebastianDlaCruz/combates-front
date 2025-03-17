import { TestBed } from '@angular/core/testing';

import { SearchBoxerService } from './search-boxer.service';

describe('SearchBoxerService', () => {
  let service: SearchBoxerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBoxerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
