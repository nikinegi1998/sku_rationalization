import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicityItemsB2Component } from './duplicity-items-b2.component';

describe('DuplicityItemsB2Component', () => {
  let component: DuplicityItemsB2Component;
  let fixture: ComponentFixture<DuplicityItemsB2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicityItemsB2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicityItemsB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
