import {Action} from "@ngrx/store";
import {Product} from "../interfaces/product";

export const ADD_PRODUCT = '[Shipping Cart] ADD_PRODUCT_TO_SHIPPING_CART';
export const REMOVE_PRODUCT = '[Shipping Cart] REMOVE_PRODUCT_FROM_SHIPPING_CART';

export class AddProductToShippingCart implements Action {
  readonly type = ADD_PRODUCT;
  constructor(readonly payload: { product: Product}) {}
}

export class RemoveProductFromShippingCart implements Action {
  readonly type = REMOVE_PRODUCT;
  constructor(readonly payload: { product: Product}) {}
}


