import { 
  Component,
  OnInit,
  Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

//models
import { ProductModel } from '../../core/models/view-models/product';
import { CategoryModel } from '../../core/models/view-models/category';
import { CategoryService } from '../../core/services/category-service';
import { ProductService } from '../../core/services/product-service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  public category: CategoryModel;
  public categoryModel : CategoryModel;
  public productModel : ProductModel;
  public categoryName : string;
  public categoryId : string;
  public products : ProductModel;
  // public targetId : string;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService : ProductService,
    private location: Location
  ) {  
    this.categoryModel = new CategoryModel("", "");    
    this.productModel = new ProductModel("", "", "");
   }

  ngOnInit() {
   this.getCategory()
   this.getCategroyProducts();
  }

  getCategory(): void {
     const targetId = this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(this.categoryModel, targetId)
      .subscribe(
        data => {
          this.successGetCategory(data);
        },
      )
  }

  successGetCategory(data){
    this.category = data;
    this.categoryName = data['title']
    this.categoryId = data['_id']
   
    console.log(this.categoryId)
  }

  getCategroyProducts():void{
    this.productService.getAllProducts(this.productModel)
    .subscribe(
      data => {
        this.successGetProducts(data);
      },
    )
  }

  successGetProducts(data){
    this.products = data.filter((data: ProductModel) => data.categoryName === this.categoryName);
    console.log(this.products)
  }
  
  goBack(): void {
    this.location.back();
  }
}
