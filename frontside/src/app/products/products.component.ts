import { Component } from '@angular/core';
import {Products} from "../models";
import {OnInit} from "@angular/core";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: Products[] = [];

  constructor(private productsService: ProductsService) {
  }
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    })
  }
}
