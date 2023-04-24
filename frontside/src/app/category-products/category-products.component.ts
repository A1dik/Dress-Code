import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {Products} from "../models";
import {ProductsService} from "../products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit{
  companyId: number | undefined
  products: Products[] = []
  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((products) => {
      let _id = products.get('id');
      this.companyId = Number(_id);
      this.productsService.getCategoryProducts(this.companyId).subscribe((products) =>{
        this.products = products;
      })
    })
  }
}
