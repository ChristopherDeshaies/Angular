import { TestBed, inject } from '@angular/core/testing';

import { HerohttpService } from './herohttp.service';

describe('HerohttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerohttpService]
    });
  });

  it('should be created', inject([HerohttpService], (service: HerohttpService) => {
    expect(service).toBeTruthy();
  }));
});
