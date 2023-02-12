import { TestBed } from '@angular/core/testing';

import { ActivteGuard } from './activte.guard';

describe('ActivteGuard', () => {
  let guard: ActivteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
