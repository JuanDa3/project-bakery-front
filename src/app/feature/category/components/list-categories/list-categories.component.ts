import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Page } from 'src/app/feature/product/shared/model/page';
import Swal from 'sweetalert2';
import { Category } from '../../shared/model/category';
import { CategoryService } from '../../shared/service/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.sass']
})
export class ListCategoriesComponent implements OnInit {

  categories$: Observable<any>;
  currentPage: number = 0;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.categoryService.refreshListCategories.subscribe(() =>{
      this.getCategories();
    });
  }

  getCategories(): void{
    this.categories$ = this.categoryService.doGetListPage(this.currentPage).pipe(
      map((response:Page) =>{
        return response;
      })
    );
  }

  goToPage(pageNumber?: number):void{
    this.categories$ = this.categoryService.doGetListPage(pageNumber).pipe(
      map((response:Page) =>{
        return response;
      })
    );
  }

  delete(category: Category){
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
        this.categoryService.doDelete(category.idCategory).subscribe(() =>{
          this.getCategories();
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
