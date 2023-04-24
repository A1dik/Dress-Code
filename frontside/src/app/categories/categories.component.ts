import { Component } from '@angular/core';
import {Categories} from "../models";
import {OnInit} from "@angular/core";
import {CategoriesService} from "../categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categories: Categories[] = [];

  constructor(private categoriesService: CategoriesService) {
  }
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe((categories) =>{
      this.categories = categories;
    })
  }
}
