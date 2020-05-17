import { TestBed, inject } from '@angular/core/testing';

import { BorderlineService } from './borderline.service';

describe('BorderlineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BorderlineService]
    });
  });

  it('should be created', inject([BorderlineService], (service: BorderlineService) => {
    expect(service).toBeTruthy();
  }));
});
