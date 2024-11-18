import { TestBed } from '@angular/core/testing';

import { PerrodfbService } from './perrodfb.service';

describe('PerrodfbService', () => {
  let service: PerrodfbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerrodfbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
