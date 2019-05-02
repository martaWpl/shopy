import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display h2 Contact',()=> {
    const fixture = TestBed.createComponent(ShoppingCartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#contact').textContent).toContain('Contact')
  });

  it('should display contact description' ,()=> {
    const fixture = TestBed.createComponent(ShoppingCartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#contact-description').textContent)
      .toContain('Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
        'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex' +
        ' ea commodo consequat.')
  });

  it('should display h2 Cart',()=> {
    const fixture = TestBed.createComponent(ShoppingCartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#cart').textContent).toContain('Cart')
  });

  it('should display h2 cart with number of added products',()=> {

  });

  it('shouldnt displays labels about number of added products if no added products', ()=>{})

});
