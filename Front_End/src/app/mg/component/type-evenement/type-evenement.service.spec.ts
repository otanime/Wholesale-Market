import { TestBed } from '@angular/core/testing';

import { TypeEvenementService } from './type-evenement.service';

describe('TypeEvenementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeEvenementService = TestBed.get(TypeEvenementService);
    expect(service).toBeTruthy();
  });
});
