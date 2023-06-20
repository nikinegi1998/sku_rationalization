import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog3Component } from './mat-dialog3.component';

describe('MatDialog3Component', () => {
  let component: MatDialog3Component;
  let fixture: ComponentFixture<MatDialog3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialog3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialog3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
