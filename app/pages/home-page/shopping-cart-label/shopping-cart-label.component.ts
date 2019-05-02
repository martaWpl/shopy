import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../shared/interfaces/product";

@Component({
  selector: 'app-shopping-cart-label',
  templateUrl: './shopping-cart-label.component.html',
  styleUrls: ['./shopping-cart-label.component.scss']
})
export class ShoppingCartLabelComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
