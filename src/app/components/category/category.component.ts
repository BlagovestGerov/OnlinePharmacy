import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';
  
import { CategoryModel } from '../../core/models/view-models/category';

import { CategoryService } from '../../core/services/category-service';
import { AuthenticationService } from '../../authentication/auth.service';


import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  public model : CategoryModel;
  public titleCategory : string;
  public idCategory : string;  
  public addCategorySuccess : boolean;
  public deleteCategorySuccess : boolean;
  public addCategoryFail : boolean;
  public roleId : string;
  // public registeredUser: string;

 categories: CategoryModel;

  constructor(
    private categoryService: CategoryService,
    private authService : AuthenticationService,
    private location : Location
  ) { 
    this.model = new CategoryModel("", "");
    this.roleId = localStorage.getItem('data._kmd.roles[0].roleId');
  }

  ngOnInit() {
    this.getCategories(); 
  }



  getCategories(): void{
    this.categoryService.getCategories(this.model)
    .subscribe(categories => this.categories = categories);
    
 }

  addCategory() : void {
    this.categoryService.addCategory(this.model)
      .subscribe(
        data => {
          this.successfullAddCategory(data);
        },
        err => {
          this.addCategoryFail = true;
        }
      )
  }

  get diagnostics() : string {
    return JSON.stringify(this.model);
  }

  successfullAddCategory(data) : void {
    this.addCategorySuccess = true;
    this.titleCategory = data['title'];
    this.idCategory = data['id'];
    location.reload();
  }


      deleteCategory (targetId): void{           
      this.categoryService.deleteCategory(targetId)
      .subscribe(
        data => {
          this.successfullDeleteCategory(data);
        },
        err => {
          this.addCategoryFail = true;
        }
      )
    }

   
    successfullDeleteCategory(data) : void {
  // console.log(this.roleId)
  
    }
      
  

}
