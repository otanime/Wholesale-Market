import { TestBed } from '@angular/core/testing';

import { ReglementService } from './reglement.service';

describe('ReglementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReglementService = TestBed.get(ReglementService);
    expect(service).toBeTruthy();
  });
});
