import { TestBed } from '@angular/core/testing';

import { RacasApiService } from './racas-api.service';

describe('RacasApiService', () => {
  let service: RacasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
