import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';

import { CategoryModel } from '../../core/models/view-models/category';

import { CategoryService } from '../../core/services/category-service';


import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


 categories: CategoryModel;

  constructor(
    private location : Location
  ) { 
   
  }

  ngOnInit() {
  }
}
