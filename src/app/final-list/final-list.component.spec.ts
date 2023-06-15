import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalListComponent } from './final-list.component';

describe('FinalListComponent', () => {
  let component: FinalListComponent;
  let fixture: ComponentFixture<FinalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
