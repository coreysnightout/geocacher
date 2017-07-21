import { TestBed, inject } from '@angular/core/testing';

import { SaveGeocacheService } from './save-geocache.service';

describe('SaveGeocacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveGeocacheService]
    });
  });

  it('should ...', inject([SaveGeocacheService], (service: SaveGeocacheService) => {
    expect(service).toBeTruthy();
  }));
});
