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
import {TopBarComponent} from "./top-bar/top-bar.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'top', component: TopBarComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'home/categories', component: CategoriesComponent},
  {path:'home/categories/:id', component: CategoryProductsComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'categories/:id', component: CategoryProductsComponent},
  {path:'categories/categories/:id', component: CategoryProductsComponent},
  {path:'categories/categories/:id/products/:id', component: ProductDetailComponent},
  {path:'products', component:ProductsComponent},
  {path:'products/:id', component: ProductDetailComponent},
  {path:'categories/:id/products/:id', component: ProductDetailComponent},
  {path:'home/categories/:id/products/:id', component: ProductDetailComponent},
  {path:'login', component: LogInComponent},
  {path: 'register', component: RegisterComponent},
  {path:'profile', component: ProfileComponent},
  {path:'cart', component: CartComponent},
  {path:'cart/categories', component: CategoriesComponent},
  {path:'cart/categories/categories/:id', component: CategoryProductsComponent},
  {path:'cart/categories/categories/:id/products/:id', component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
