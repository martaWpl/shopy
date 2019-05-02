import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsContainerComponent } from './cards-container.component';
import {CardComponent} from "../card/card.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('CardsContainerComponent', () => {
  let component: CardsContainerComponent;
  let fixture: ComponentFixture<CardsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CardsContainerComponent, CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
