import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {CategoriesComponent} from "./categories/categories.component";
import {CategoryProductsComponent} from "./category-products/category-products.component";
import {LogInComponent} from "./log-in/log-in.component";
import {ProfileComponent} from "./profile/profile.component";
import {RegisterComponent} from "./register/register.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'categories/:id', component: CategoryProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'products/:id', component: ProductDetailComponent},
  {path:'categories/:id/products/:id', component: ProductDetailComponent},
  {path:'login', component: LogInComponent},
  {path: 'register', component: RegisterComponent},
  {path:'profile', component: ProfileComponent},
  {path:'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
