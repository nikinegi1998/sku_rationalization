import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog2Component } from './mat-dialog2.component';

describe('MatDialog2Component', () => {
  let component: MatDialog2Component;
  let fixture: ComponentFixture<MatDialog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialog2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
