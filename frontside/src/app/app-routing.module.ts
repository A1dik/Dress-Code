import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {CategoriesComponent} from "./categories/categories.component";
import {CategoryProductsComponent} from "./category-products/category-products.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'categories/:id', component: CategoryProductsComponent},
  {path:'products', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
