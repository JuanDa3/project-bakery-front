import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/service/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.sass']
})
export class ListCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
