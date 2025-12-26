import { TestBed } from '@angular/core/testing';

import { FacetPresetStorageService } from './facet-preset-storage.service';

describe('FacetPresetStorageService', () => {
  let service: FacetPresetStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacetPresetStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
