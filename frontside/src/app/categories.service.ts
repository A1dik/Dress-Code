import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categories} from "./models";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  BASE_URL = 'http://127.0.0.1:8000/';
  constructor(private client: HttpClient) { }

  getCategories(): Observable<Categories[]> {
    return this.client.get<Categories[]>(`${this.BASE_URL}products/categories`)
  }
}
