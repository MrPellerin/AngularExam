import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantTableComponent } from './Restaurant/components/restaurant-table/restaurant-table.component';
import { RestaurantSmartComponentComponent } from './Restaurant/pages/restaurant-smart-component/restaurant-smart-component.component';
import {ROUTES} from "./routing";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ColorEvaluationDirective } from './color-evaluation.directive';
import { RestaurantFormComponent } from './Restaurant/components/restaurant-form/restaurant-form.component';
import { RestaurantSmartFicheComponent } from './Restaurant/pages/restaurant-smart-fiche/restaurant-smart-fiche.component';
import {RestaurantFicheComponent} from "./Restaurant/components/restaurant-fiche/restaurant-fiche.component";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantTableComponent,
    RestaurantSmartComponentComponent,
    ColorEvaluationDirective,
    RestaurantFormComponent,
    RestaurantFicheComponent,
    RestaurantSmartFicheComponent,
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
