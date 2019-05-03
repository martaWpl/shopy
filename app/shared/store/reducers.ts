import {omit} from "lodash";
import {ADD_PRODUCT, REMOVE_PRODUCT} from "./actions";

export const addedProductsReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case ADD_PRODUCT:
      state.addedProducts = [...state.addedProducts, action.payload.product];
      if(action.payload.product.prize) {
        state.prize = state.prize + action.payload.product.prize;
      }
      return state;

    case REMOVE_PRODUCT:
      state.addedProducts = state.addedProducts.filter( product => product!== action.payload.product);
      return state;

    default:
      return state;
  }
};

const initialState: any = {
  addedProducts: [],
  prize: 0
};

export const reducers = {
  'addedProductsReducer': addedProductsReducer
};

