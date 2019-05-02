import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartLabelComponent } from './shopping-cart-label.component';

describe('ShoppingCartLabelComponent', () => {
  let component: ShoppingCartLabelComponent;
  let fixture: ComponentFixture<ShoppingCartLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
