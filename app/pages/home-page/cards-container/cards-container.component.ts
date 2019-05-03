import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../../shared/interfaces/product";

export const API_URL = 'https://my-json-server.typicode.com/martawpl/shopy';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})


export class CardsContainerComponent implements OnInit {
  private products: Product[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProducts().subscribe(products => {
      this.products = products;
      debugger;
    })
  }

  getProducts(): Observable<Product[]> {
    let productsEndpoint = API_URL+'/products';
    return this.http.get<Product[]>(productsEndpoint);
  }

  //products = [
    // {id: 0, title: 'Title', description: 'Description', imagePath:'assets/images/logo.jpg'},
    // {id: 1, title: 'Title1', description: 'Description1', imagePath:'assets/images/logo6.jpg'},
    // {id: 2, title: 'Title2', description: 'Description2', imagePath:'assets/images/logo2.jpg'},
    // {id: 3, title: 'Title3', description: 'Description3', imagePath:'assets/images/logo3.jpg'},
    // {id: 4, title: 'Title4', description: 'Description4', imagePath:'assets/images/logo4.jpg'},
    // {id: 5, title: 'Title5', description: 'Description5', imagePath:'assets/images/logo5.jpg'},
    // {id: 6, title: 'Title6', description: 'Description6', imagePath:'assets/images/logo8.jpg'},
    // {id: 7, title: 'Title7', description: 'Description7', imagePath:'assets/images/logo7.jpg'},
  //];



}
