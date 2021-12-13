import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './sharedComponents/headers/headers.component';
import { FootersComponent } from './sharedComponents/footers/footers.component';
import { HomeComponent } from './pages/home/home.component';
import { SlidersComponent } from './pages/home/sliders/sliders.component';
import { SpecialProductsComponent } from './pages/home/special-products/special-products.component';
import { NewProductsComponent } from './pages/home/new-products/new-products.component';
import { PopularProductsComponent } from './pages/home/popular-products/popular-products.component';
import { LatestNewsComponent } from './pages/home/latest-news/latest-news.component';
import { BrandsComponent } from './pages/home/brands/brands.component';
import {SliderService} from "./services/slider.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FootersComponent,
    HomeComponent,
    SlidersComponent,
    SpecialProductsComponent,
    NewProductsComponent,
    PopularProductsComponent,
    LatestNewsComponent,
    BrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SliderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
