import { Component, OnInit } from '@angular/core';
import {Action, Store} from "../../shared/store/store.service";
import {Product} from "../../shared/interfaces/product";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store) {
    this.store.select('product');
  }

  ngOnInit() {
  }

  getProduct(id: number){
    this.store.dispatch(new Action('GET_PRODUCT', id));
  }

  addProduct(product: Product){
    this.store.dispatch(new Action('ADD_PRODUCT', product))
  }

}
