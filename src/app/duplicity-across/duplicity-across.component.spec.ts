import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicityAcrossComponent } from './duplicity-across.component';

describe('DuplicityAcrossComponent', () => {
  let component: DuplicityAcrossComponent;
  let fixture: ComponentFixture<DuplicityAcrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicityAcrossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicityAcrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
