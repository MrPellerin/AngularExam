import {Routes} from "@angular/router";
import {RestaurantSmartComponentComponent} from "./Restaurant/pages/restaurant-smart-component/restaurant-smart-component.component";
import {AppComponent} from "./app.component";

export const ROUTES: Routes = [
  { path: 'restaurants', component:RestaurantSmartComponentComponent},
  { path: '', component:RestaurantSmartComponentComponent}
]
