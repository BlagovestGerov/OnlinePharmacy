import { 
  Component,
  OnInit,
  Output,
  EventEmitter } from '@angular/core';

import { CategoryModel } from '../../core/models/view-models/category';

import { CategoryService } from '../../core/services/category-service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  // public category: CategoryModel;

  @Output() selection: EventEmitter<any> = new EventEmitter();
  // @Output() category: CategoryModel;

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

 sendData(categoryInput){
  this.selection.emit(categoryInput)
   console.log(categoryInput)
 }
}
