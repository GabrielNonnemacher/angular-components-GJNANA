import { TestBed } from '@angular/core/testing';

import { MatGjnanaLibService } from './mat-gjnana-lib.service';

describe('MatGjnanaLibService', () => {
  let service: MatGjnanaLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatGjnanaLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
