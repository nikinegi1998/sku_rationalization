import { TestBed } from '@angular/core/testing';

import { MatDialog1Service } from './mat-dialog1.service';

describe('MatDialog1Service', () => {
  let service: MatDialog1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatDialog1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
