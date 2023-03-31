import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMeasurementUnitsComponent } from './list-measurement-units.component';

describe('ListMeasurementUnitsComponent', () => {
  let component: ListMeasurementUnitsComponent;
  let fixture: ComponentFixture<ListMeasurementUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMeasurementUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMeasurementUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
