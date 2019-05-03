import {Component, OnInit} from '@angular/core';
import {Product} from "../../../shared/interfaces/product";
import {ProductsService} from "../../../shared/services/products.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim" +
    " ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
    " ea commodo consequat.";

  addedProducts: Product[] = [];

  constructor(private productService: ProductsService,private store: Store<any>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.addedProducts = state.addedProductsReducer.addedProducts;
    });
  }

}
