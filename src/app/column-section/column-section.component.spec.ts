import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnSectionComponent } from './column-section.component';

describe('ColumnSectionComponent', () => {
  let component: ColumnSectionComponent;
  let fixture: ComponentFixture<ColumnSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
