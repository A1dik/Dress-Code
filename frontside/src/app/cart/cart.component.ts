import {Component, Input, OnInit} from '@angular/core';
import {Cart} from "../models";
import {Products} from "../models";
import {CartService} from "../cart.service";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  id: number | undefined;
  products: Cart[] = [];
  carts: Products[] = [];
  username = localStorage.getItem('username')
  prod_name: string = '';
  prod_img: File | undefined;
  prod_price: number | undefined;
  product_id: number| undefined;

  constructor(private cartService: CartService, private productsService: ProductsService) {
  }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    return this.cartService.getProducts(String(this.username)).subscribe((data) =>{
      this.products = data;
      console.log(this.products)
    })
  }
  getProductsfrom(prod_id:number){
    return this.productsService.getProduct(prod_id).subscribe((data) =>{
      this.prod_name = data.name;
      this.prod_img = data.image;
      this.prod_price = data.price;
    })
  }

  deleteCart(id:number){
    return this.cartService.deleteCart(Number(id)).subscribe((cart) =>{
      this.products = this.products.filter((cart) => cart.id !== id)
    })
  }

}
