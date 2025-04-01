import { TestBed } from '@angular/core/testing';

import { AdapterParticipantsService } from './adapter-participants.service';

describe('AdapterParticipantsService', () => {
  let service: AdapterParticipantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdapterParticipantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
