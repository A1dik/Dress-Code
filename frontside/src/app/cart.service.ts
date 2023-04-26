import { Injectable } from '@angular/core';
import {Cart} from "./models";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CartService {
  BASE_URL = 'http://127.0.0.1:8000/';
  constructor(private client: HttpClient) { }

  addProduct(product_id:number, username:string): Observable<Cart>{
    return this.client.post<Cart>(`${this.BASE_URL}user/cart/`,
      {product:product_id, user_name:username})
  }

  getProducts(username: number): Observable<Cart[]>{
    return this.client.get<Cart[]>(`${this.BASE_URL}user/cart/${username}/`)
  }
}
