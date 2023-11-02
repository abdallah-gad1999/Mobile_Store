import { TestBed } from '@angular/core/testing';

import { ProdectWithApiService } from './prodect-with-api.service';

describe('ProdectWithApiService', () => {
  let service: ProdectWithApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdectWithApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
