import { TestBed } from '@angular/core/testing';

import { CurrentCritterService } from './current-critter.service';

describe('CurrentCritterService', () => {
  let service: CurrentCritterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentCritterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
