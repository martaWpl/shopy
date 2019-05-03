import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../../shared/interfaces/product";
import {Store} from "@ngrx/store";
import {ProductsService} from "../../../shared/services/products.service";

@Component({
  selector: 'app-cart-placeholder',
  templateUrl: './cart-placeholder.component.html',
  styleUrls: ['./cart-placeholder.component.scss']
})
export class CartPlaceholderComponent implements OnInit {
  @Input() addedProducts: Product[];

  constructor() { }

  ngOnInit() {}

}
