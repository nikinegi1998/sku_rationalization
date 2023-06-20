import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatModal1Component } from './mat-modal1.component';

describe('MatModal1Component', () => {
  let component: MatModal1Component;
  let fixture: ComponentFixture<MatModal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatModal1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatModal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
