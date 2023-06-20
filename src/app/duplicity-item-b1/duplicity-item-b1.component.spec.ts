import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicityItemB1Component } from './duplicity-item-b1.component';

describe('DuplicityItemB1Component', () => {
  let component: DuplicityItemB1Component;
  let fixture: ComponentFixture<DuplicityItemB1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicityItemB1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicityItemB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
