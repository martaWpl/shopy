import {Component, OnInit} from '@angular/core';
import {Product} from "../../../shared/interfaces/product";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../shared/services/products.service";
import {LoaderService} from "../../../shared/services/loader.service";
import {AddProductToShippingCart} from "../../../shared/store/actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  id: any;
  product: Product;
  addedProducts: Product[] =[];
  defaultImagePath = 'assets/images/logo.jpg';
  error: boolean = false;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private store: Store<any>,
              private loader: LoaderService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
      this.id = params.id;
      this.getProduct(this.id);
    },
        error1 => {
      this.error = true;
      console.error(error1);
    });

    this.getAddedProducts();
  }

  getProduct(id: number) {
    this.productService.getProduct(id)
      .subscribe(product => {
        this.product = product;
      }, error1 => {
        this.error = true;
        console.error(error1);
      });
  }

  getAddedProducts() {
    this.store.subscribe(state => {
      this.addedProducts = state.addedProductsReducer.addedProducts;
    });
  }

  addProduct(product: Product) {
    this.store.dispatch(new AddProductToShippingCart({product: product}));
  }

  alreadyAdded(product: Product) {
    return this.addedProducts && this.addedProducts.filter(addedProduct => addedProduct.id === product.id).length > 0;
  }
}
