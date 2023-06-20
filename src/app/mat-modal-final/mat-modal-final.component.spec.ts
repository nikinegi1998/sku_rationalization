import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatModalFinalComponent } from './mat-modal-final.component';

describe('MatModalFinalComponent', () => {
  let component: MatModalFinalComponent;
  let fixture: ComponentFixture<MatModalFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatModalFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatModalFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
