import {Component, Input, OnInit} from '@angular/core';
import {Cart} from "../models";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  products: Cart[] = [];
  username = localStorage.getItem('username')
  ngOnInit() {
    this.getProducts();
  }

  constructor(private cartService: CartService) {
  }
  getProducts(){
    return this.cartService.getProducts(1).subscribe((data) =>{
      this.products = data
    })
  }
}
