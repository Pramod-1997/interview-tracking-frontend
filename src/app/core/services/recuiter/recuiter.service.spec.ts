import { TestBed } from '@angular/core/testing';

import { RecuiterService } from './recuiter.service';

describe('RecuiterService', () => {
  let service: RecuiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
