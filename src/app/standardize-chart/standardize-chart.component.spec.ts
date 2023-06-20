import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardizeChartComponent } from './standardize-chart.component';

describe('StandardizeChartComponent', () => {
  let component: StandardizeChartComponent;
  let fixture: ComponentFixture<StandardizeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardizeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardizeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
