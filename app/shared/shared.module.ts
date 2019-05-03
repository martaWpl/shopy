import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from "./components/navigation-bar/navigation-bar.component";
import {RouterModule} from "@angular/router";
import {routes} from "../app-routing.module";
import {StaticPageComponent} from './components/static-page/static-page.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import { LoaderComponent } from './components/loader/loader.component';
import {LoaderService} from "./services/loader.service";
import {LoaderInceptorService} from "./services/loader-inceptor.service";

@NgModule({
  declarations: [
    NavigationBarComponent,
    StaticPageComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    RouterModule.forRoot(routes)
  ],
  providers: [
    HttpClient,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInceptorService,
      multi: true
    }
  ],
  exports: [
    NavigationBarComponent,
    StaticPageComponent,
    LoaderComponent
  ]
})
export class SharedModule {
}
