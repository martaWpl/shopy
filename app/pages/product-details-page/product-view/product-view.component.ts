import { Component, OnInit } from '@angular/core';
import {Product} from "../../../shared/interfaces/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  id: any;
  product: Product = {id: 0, title: 'Title', description: 'Description', imagePath:'assets/images/logo.jpg', prize: 0};


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(id => {
      this.id = id;
      //this.getProduct(this.id);
    }, error1 => {
      console.error(error1);
    });
  }

}
