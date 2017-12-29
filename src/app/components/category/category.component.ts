import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';
import { CategoryModel } from '../../core/models/view-models/category';
import { CategoryService } from '../../core/services/category-service';

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
  // public registeredUser: string;

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
  }


      deleteCategory (targetId): void{
      // this.categoryService.deleteCategory(this.model)
      // this.categories = this.categories.findById(category.id).filter(h => h !== category);
      // this.categoryService.deleteCategory(this.model)
      // .subscribe(
      //   data => {
      //     this.successfullAddCategory(data);
      //   }
      // );
      // this.categories = this.categories.filter(h => h !== this.model);
      this.categoryService.deleteCategory(targetId).subscribe();
    }

    successfullDeleteCategory(category) : void {
      // var index = this.categories.indexOf(category)
      // this.categories.splice(index, 1);
      // this.categories = this.categories.filter(h => h !== CategoryModel);  
        // this.deleteCategorySuccess = true;
        // this.category = this.category.filter(el => Number(el.id) !== Number(targetId));
        // this.selectedCategory = {};
        // this.titleCategory = category['title'];
        // this.idCategory = category['id'];
        // this.registeredUser = categories['username'];    
        
      }
      
  

}
