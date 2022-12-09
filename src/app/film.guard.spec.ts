import { TestBed } from '@angular/core/testing';

import { FilmGuard } from './film.guard';

describe('FilmGuard', () => {
  let guard: FilmGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FilmGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
