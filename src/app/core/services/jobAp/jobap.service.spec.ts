import { TestBed } from '@angular/core/testing';

import { JobapService } from './jobap.service';

describe('JobapService', () => {
  let service: JobapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
