import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ProductDetailsPageComponent} from "./pages/product-details-page/product-details-page.component";
import {AboutUsPageComponent} from "./pages/about-us-page/about-us-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'product/:id', component: ProductDetailsPageComponent },
  { path: 'about', component: AboutUsPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
