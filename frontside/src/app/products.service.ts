import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Products} from "./models";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL = 'http://127.0.0.1:8000/';
  constructor(private client: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.client.get<Products[]>(`${this.BASE_URL}products/product`)
  }
  getCategoryProducts(category_id: number): Observable<Products[]>{
    return this.client.get<Products[]>(`${this.BASE_URL}products/categories/${category_id}`)
  }
}
