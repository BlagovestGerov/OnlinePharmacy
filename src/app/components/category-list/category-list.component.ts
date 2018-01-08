import { Component, OnInit } from '@angular/core';

import { CategoryModel } from '../../core/models/view-models/category';

import { CategoryService } from '../../core/services/category-service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {


  public model : CategoryModel;
  categories: CategoryModel;

  constructor(
    private categoryService: CategoryService,
  ) {
    this.model = new CategoryModel("", "");
   }

  ngOnInit() {
    this.getCategories();     
  }

  getCategories(): void{
    this.categoryService.getCategories(this.model)
    .subscribe(categories => this.categories = categories);
    
 }

}
