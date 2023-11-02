import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userLogGuard } from './user-log.guard';

describe('userLogGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userLogGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
