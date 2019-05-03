import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ProductDetailsPageComponent} from './pages/product-details-page/product-details-page.component';
import {AboutUsPageComponent} from './pages/about-us-page/about-us-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {SharedModule} from "./shared/shared.module";
import {ShoppingCartComponent} from './pages/home-page/shopping-cart/shopping-cart.component';
import {CardsContainerComponent} from './pages/home-page/cards-container/cards-container.component';
import {CardComponent} from './pages/home-page/card/card.component';
import {CartPlaceholderComponent} from './pages/home-page/cart-placeholder/cart-placeholder.component';
import {ShoppingCartLabelComponent} from './pages/home-page/shopping-cart-label/shopping-cart-label.component';
import {ProductViewComponent} from './pages/product-details-page/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDetailsPageComponent,
    AboutUsPageComponent,
    ContactPageComponent,
    ShoppingCartComponent,
    CardsContainerComponent,
    CardComponent,
    CartPlaceholderComponent,
    ShoppingCartLabelComponent,
    ProductViewComponent
  ],
  entryComponents: [
    HomePageComponent,
    ProductDetailsPageComponent,
    AboutUsPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
    HomePageComponent,
    ProductDetailsPageComponent,
    AboutUsPageComponent,
    ContactPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
