import {forwardRef, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from "@angular/common/http";
import { CategoriesComponent } from './categories/categories.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {AuthInterceptor} from "./AuthInterceptor";
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    ProductsComponent,
    ProductDetailComponent,
    CategoriesComponent,
    CategoryProductsComponent,
    ProfileComponent,
    RegisterComponent,
    CartComponent,
    TopBarComponent,
    AboutComponent,
    ContactComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
