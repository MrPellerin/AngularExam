import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../models/restaurant.model";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-restaurant-smart-fiche',
  templateUrl: './restaurant-smart-fiche.component.html',
  styleUrls: ['./restaurant-smart-fiche.component.css']
})
export class RestaurantSmartFicheComponent implements OnInit {

  public restaurantsLst: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.loadRestaurants();
  }

  private loadRestaurants():void {
    this.restaurantService.getRestaurants().subscribe(value => this.restaurantsLst = value)
  }

}
