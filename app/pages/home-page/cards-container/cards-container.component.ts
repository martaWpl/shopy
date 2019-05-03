import {Component, OnInit} from '@angular/core';
import {Product} from "../../../shared/interfaces/product";
import {ProductsService} from "../../../shared/services/products.service";

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})


export class CardsContainerComponent implements OnInit {
  private products: Product[];

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    })
  }


}
