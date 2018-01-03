import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../core/models/view-models/category';
import { CategoryService } from '../../core/services/category-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  public model : CategoryModel;
  // public deleteCategorySuccess : boolean;
  public deleteCategoryFail : boolean;
  public titleCategory : string;
  public idCategory : string; 
  public addCategorySuccess : boolean;
  public addCategoryFail : boolean;



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


  deleteCategory (targetId): void{           
    this.categoryService.deleteCategory(targetId)
    .subscribe(
      data => {
        this.successfullDeleteCategory(data);
      },
      err => {
        this.deleteCategoryFail = true;
      }
    )
  }
 
  successfullDeleteCategory(data) : void {
// console.log(this.roleId)
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
    // location.reload();
  }
}

