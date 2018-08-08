import { TestBed, async, inject } from '@angular/core/testing';

import { GuestGuard } from './guest.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestGuard]
    });
  });

  it('should ...', inject([GuestGuard], (guard: GuestGuard) => {
    expect(guard).toBeTruthy();
  }));
});
