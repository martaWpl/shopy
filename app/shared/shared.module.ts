import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationBarComponent} from "./components/navigation-bar/navigation-bar.component";
import {RouterModule} from "@angular/router";
import {routes} from "../app-routing.module";
import { StaticPageComponent } from './components/static-page/static-page.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    StaticPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    NavigationBarComponent,
    StaticPageComponent
  ]
})
export class SharedModule {
}
