import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {CardsContainerComponent} from "./cards-container/cards-container.component";
import {CartPlaceholderComponent} from "./cart-placeholder/cart-placeholder.component";
import {RouterTestingModule} from "@angular/router/testing";
import {CardComponent} from "./card/card.component";

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HomePageComponent,
        ShoppingCartComponent,
      CardsContainerComponent,
        CardComponent,
      CartPlaceholderComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //tests for shop
  it('should display shopping cart', ()=> {});
  it('should display contact label in shopping card', ()=> {});
  it('should display contact info in shopping card', ()=> {});
  it('should display cart label', ()=> {});
  it('should display "cart is empty" if 0 products has been selected', ()=> {});


  it('should display cards container', ()=> {});


});
