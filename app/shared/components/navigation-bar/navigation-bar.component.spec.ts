import {async, ComponentFixture, TestBed, inject, fakeAsync, tick} from '@angular/core/testing';

import { NavigationBarComponent } from './navigation-bar.component';
import {Route, Router, Routes} from "@angular/router";
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule, Location} from '@angular/common';
import {routes} from "../../../app-routing.module";
import {ProductDetailsPageComponent} from "../../../pages/product-details-page/product-details-page.component";
import {AboutUsPageComponent} from "../../../pages/about-us-page/about-us-page.component";
import {ContactPageComponent} from "../../../pages/contact-page/contact-page.component";
import {HomePageComponent} from "../../../pages/home-page/home-page.component";

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;
  let compiledComponent: any;
  let debugElement: DebugElement;

  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes(routes)],
      declarations: [
        NavigationBarComponent,
        HomePageComponent,
        ProductDetailsPageComponent,
        AboutUsPageComponent,
        ContactPageComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    compiledComponent = fixture.debugElement.nativeElement;

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display nav', ()=>{
    const fixture = TestBed.createComponent(NavigationBarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav')).not.toBe(null);
  });

  it('nav should render brand image with link to home page', fakeAsync(()=> {
    const fixture = TestBed.createComponent(NavigationBarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //displays brand image
    expect(compiled.querySelector('#brand-image > img').src).toContain('/assets/images/logo.jpg');

    //redirect to home page
    compiled.querySelector('#brand-image').click();
    tick();

    expect(location.path()).toBe('/');
  })
  );

  it('nav should display link to home page', ()=> {
    const fixture = TestBed.createComponent(NavigationBarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#home').textContent).toContain('Home');
  });

  it('home link should redirect to home page', fakeAsync(()=> {
    const fixture = TestBed.createComponent(NavigationBarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#home').click();

    tick();

    expect(location.path()).toBe('/');

  }));


  it('nav should display link to contact page', ()=> {
    const fixture = TestBed.createComponent(NavigationBarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#contact').textContent).toContain('Contact');
  });

  it('link should redirect to contact page',
    fakeAsync(()=> {
      const fixture = TestBed.createComponent(NavigationBarComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      compiled.querySelector('#contact').click();

      tick();

      expect(location.path()).toBe('/contact');

    }));

  it('nav should display link to about us page', ()=> {
    const fixture = TestBed.createComponent(NavigationBarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#about').textContent).toContain('About');
  });

  it('link should redirect to about us page',
    fakeAsync(()=> {
      const fixture = TestBed.createComponent(NavigationBarComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      compiled.querySelector('#about').click();

      tick();

      expect(location.path()).toBe('/about');

    }));

  it('should display search icon', ()=> {
    const fixture = TestBed.createComponent(NavigationBarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //displays brand image
    expect(compiled.querySelector('#search-icon').src)
      .toContain('http://localhost:9876/assets/images/lupa.png');

  })



});
