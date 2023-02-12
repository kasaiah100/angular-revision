import { TestBed } from '@angular/core/testing';

import { NewproviderService } from './newprovider.service';

describe('NewproviderService', () => {
  let service: NewproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
