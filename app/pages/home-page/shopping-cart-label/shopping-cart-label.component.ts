import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../shared/interfaces/product";
import {ProductsService} from "../../../shared/services/products.service";

@Component({
  selector: 'app-shopping-cart-label',
  templateUrl: './shopping-cart-label.component.html',
  styleUrls: ['./shopping-cart-label.component.scss']
})
export class ShoppingCartLabelComponent implements OnInit {
  @Input() product: Product;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
  }

  removeProduct(product: Product) {
    this.productService.removeProductFromCart(product);
  }
}
