import { TestBed } from '@angular/core/testing';

import { EvidenciaService } from './evidencia.service';

describe('EvidenciaService', () => {
  let service: EvidenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvidenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
