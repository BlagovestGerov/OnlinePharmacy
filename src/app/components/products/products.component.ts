import { Component, OnInit } from '@angular/core';

import {ProductModel } from '../../core/models/view-models/product';

import { ProductService } from '../../core/services/product-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public model : ProductModel;
  products : ProductModel;

  constructor(
    private productService : ProductService
  ) { 
    this.model = new ProductModel("", "", "")
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts():void{
    this.productService.getAllProducts(this.model)
    .subscribe(products => this.products = products);
  }

}






