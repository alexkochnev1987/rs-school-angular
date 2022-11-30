import { TestBed } from '@angular/core/testing';

import { ErrorHandlersService } from './error-handlers.service';

describe('ErrorHandlersService', () => {
  let service: ErrorHandlersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandlersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
