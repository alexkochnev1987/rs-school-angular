import { TestBed } from '@angular/core/testing';

import { HeaderSortService } from './header-sort.service';

describe('HeaderSortService', () => {
  let service: HeaderSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
