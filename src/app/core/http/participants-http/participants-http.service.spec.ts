import { TestBed } from '@angular/core/testing';

import { ParticipantsHttpService } from './participants-http.service';

describe('ParticipantsHttpService', () => {
  let service: ParticipantsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
