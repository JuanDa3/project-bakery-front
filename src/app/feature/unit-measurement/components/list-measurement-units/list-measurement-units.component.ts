import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UnitMeasurementService } from '../../shared/service/unit-measurement.service';
import { Page } from 'src/app/feature/product/shared/model/page';
import Swal from 'sweetalert2';
import { UnitMeasurement } from '../../shared/model/unit-measurement';

@Component({
  selector: 'app-list-measurement-units',
  templateUrl: './list-measurement-units.component.html',
  styleUrls: ['./list-measurement-units.component.sass']
})
export class ListMeasurementUnitsComponent implements OnInit {

  unitsMeasurement$: Observable<any>;
  currentPage: number = 0;

  constructor(
    private unitMeasurementService: UnitMeasurementService
  ) { }

  ngOnInit(): void {
    this.getUnitMeasurement();
    this.unitMeasurementService.refreshListUnitMeasurements.subscribe(()=>{
      this.getUnitMeasurement();
    });
  }

  getUnitMeasurement():void{
    this.unitsMeasurement$ = this.unitMeasurementService.doGetListPage(this.currentPage).pipe(
      map((response:Page) => {
        return response;
      })
    );
  }

  goToPage(pageNumber?: number):void{
    this.unitsMeasurement$ = this.unitMeasurementService.doGetListPage(pageNumber).pipe(
      map((response:Page) =>{
        return response;
      })
    );
  }

  delete(unitMeasurement: UnitMeasurement){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.unitMeasurementService.doDelete(unitMeasurement.idUnitMeasurement).subscribe(() =>{
          this.getUnitMeasurement();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
