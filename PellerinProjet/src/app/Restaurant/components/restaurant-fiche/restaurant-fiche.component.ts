import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../models/restaurant.model";
import {Evaluation} from "../../models/evaluation.model";

@Component({
  selector: 'app-restaurant-fiche',
  templateUrl: './restaurant-fiche.component.html',
  styleUrls: ['./restaurant-fiche.component.css']
})
export class RestaurantFicheComponent implements OnInit {

  @Input() restaurantsLst: Restaurant[] = [];

  restaurant!: Restaurant;
  id!:number;

  constructor() { }

  ngOnInit(): void {

  }

  test() {
    for (let restau of this.restaurantsLst) {
      this.restaurant = restau;
      break
    }
  }
}
