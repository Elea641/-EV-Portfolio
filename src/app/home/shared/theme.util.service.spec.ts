import { TestBed } from '@angular/core/testing';

import { ThemeUtilService } from './theme.util.service';

describe('ThemeUtilService', () => {
  let service: ThemeUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
