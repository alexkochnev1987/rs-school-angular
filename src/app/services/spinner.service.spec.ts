import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SpinnerStateName } from '../constants';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should should return FALSE', (done: DoneFn) => {
    service
      .getLoading(SpinnerStateName.login)
      .subscribe(x => expect(x).toBe(false));
    done();
  });
});
