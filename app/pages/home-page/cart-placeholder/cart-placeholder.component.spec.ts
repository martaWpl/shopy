import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPlaceholderComponent } from './cart-placeholder.component';
import {NavigationBarComponent} from "../../../shared/components/navigation-bar/navigation-bar.component";

describe('CartPlaceholderComponent', () => {
  let component: CartPlaceholderComponent;
  let fixture: ComponentFixture<CartPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display info "Cart is empty" if no products added',()=> {
    const fixture = TestBed.createComponent(NavigationBarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#no-products-label').textContent).toContain('Cart is empty')
  });
});
