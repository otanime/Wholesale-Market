import { TestBed } from '@angular/core/testing';

import { TypeEmballageService } from './type-emballage.service';

describe('TypeEmballageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeEmballageService = TestBed.get(TypeEmballageService);
    expect(service).toBeTruthy();
  });
});
