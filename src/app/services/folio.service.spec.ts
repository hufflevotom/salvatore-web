import { TestBed } from '@angular/core/testing';

import { FolioService } from './folio.service';

describe('FolioService', () => {
  let service: FolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
