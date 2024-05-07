import { TestBed } from '@angular/core/testing';

import { LibMatGjnanaService } from './lib-mat-gjnana.service';

describe('LibMatGjnanaService', () => {
  let service: LibMatGjnanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibMatGjnanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
