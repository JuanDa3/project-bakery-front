import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnitMeasurementComponent } from './create-unit-measurement.component';

describe('CreateUnitMeasurementComponent', () => {
  let component: CreateUnitMeasurementComponent;
  let fixture: ComponentFixture<CreateUnitMeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUnitMeasurementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnitMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
