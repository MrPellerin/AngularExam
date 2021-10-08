import {Routes} from "@angular/router";
import {RestaurantSmartComponentComponent} from "./Restaurant/pages/restaurant-smart-component/restaurant-smart-component.component";
import {AppComponent} from "./app.component";
import {RestaurantSmartFicheComponent} from "./Restaurant/pages/restaurant-smart-fiche/restaurant-smart-fiche.component";

export const ROUTES: Routes = [
  { path: 'fiche', component:RestaurantSmartFicheComponent},
  { path: '', component:RestaurantSmartComponentComponent}
]
