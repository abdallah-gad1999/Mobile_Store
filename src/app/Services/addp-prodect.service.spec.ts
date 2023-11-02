import { TestBed } from '@angular/core/testing';

import { AddpProdectService } from './addp-prodect.service';

describe('AddpProdectService', () => {
  let service: AddpProdectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddpProdectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
