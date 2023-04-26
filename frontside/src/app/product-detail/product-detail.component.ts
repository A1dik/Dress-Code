import { Component, OnInit, Input} from '@angular/core';
import {Products} from "../models";
import {ProductsService} from "../products.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  name: string = '';
  description: string = '';
  product_id: number | undefined;

  productImage: File | undefined;

  currentUser = localStorage.getItem('username');

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private cartService: CartService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((products) =>{
      let _id = products.get('id');
      this.product_id = Number(_id);
      this.productsService.getProduct(this.product_id).subscribe((products) =>{
        this.name = products.name;
        this.description = products.description;
        this.productImage = products.image;
      })
    })
  }

  addToCart(){
    if(this.currentUser) {
      return this.cartService.addProduct(Number(this.product_id), this.currentUser).subscribe((data) => {
        this.product_id = data.product_id;
        this.currentUser = data.username;
      })
    } else{
      return console.log('No');
    }
  }
}
