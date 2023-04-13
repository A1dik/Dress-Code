import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LogInComponent} from "./log-in/log-in.component";
import {ProductsComponent} from "./products/products.component";
import {ProductCategoryComponent} from "./product-category/product-category.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:categoryName', component: ProductCategoryComponent},
  {path: 'products/:productId',component: ProductDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
