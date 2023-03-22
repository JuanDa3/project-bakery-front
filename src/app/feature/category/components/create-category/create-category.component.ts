import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Category } from '../../shared/model/category';
import { CategoryService } from '../../shared/service/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.sass']
})
export class CreateCategoryComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
  ) { 
    this.buildFormCategory();
  }

  ngOnInit(): void {
  }

  private buildFormCategory() {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  create() {
    if (this.categoryForm.valid) {
      const category: Category = {
        name: this.categoryForm.value["name"],
      }
      this.categoryService.doPost(category).subscribe(data => {
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

    this.categoryForm.reset();
  }

  get dataForm() { return this.categoryForm.controls; }

}
