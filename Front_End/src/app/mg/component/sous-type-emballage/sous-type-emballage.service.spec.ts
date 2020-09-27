import { TestBed } from '@angular/core/testing';

import { SousTypeEmballageService } from './sous-type-emballage.service';

describe('SousTypeEmballageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SousTypeEmballageService = TestBed.get(SousTypeEmballageService);
    expect(service).toBeTruthy();
  });
});
