import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UnitMeasurement } from '../../shared/model/unit-measurement';
import { UnitMeasurementService } from '../../shared/service/unit-measurement.service';

@Component({
  selector: 'app-create-unit-measurement',
  templateUrl: './create-unit-measurement.component.html',
  styleUrls: ['./create-unit-measurement.component.sass']
})
export class CreateUnitMeasurementComponent implements OnInit {

  unitMeasurementForm: FormGroup;

  constructor(
    private unitMeasurementService: UnitMeasurementService,
  ) {
    this.buildFormUnitMeasurement();
  }

  ngOnInit(): void {
  }

  private buildFormUnitMeasurement() {
    this.unitMeasurementForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  create() {
    if (this.unitMeasurementForm.valid) {
      const unitMeasurement: UnitMeasurement = {
        name: this.unitMeasurementForm.value["name"],
      }
      this.unitMeasurementService.doPost(unitMeasurement).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Successful!',
          text: data.message,
        });
      });

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need complete all the fields',
      });
    }

    this.unitMeasurementForm.reset();

  }

  get dataForm() { return this.unitMeasurementForm.controls; }
}
