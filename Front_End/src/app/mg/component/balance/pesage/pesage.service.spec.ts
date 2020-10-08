import { TestBed } from '@angular/core/testing';

import { PesageService } from './pesage.service';

describe('PesageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PesageService = TestBed.get(PesageService);
    expect(service).toBeTruthy();
  });
});
