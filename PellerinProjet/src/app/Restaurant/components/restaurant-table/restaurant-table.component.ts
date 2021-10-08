import {Component, Input, OnInit} from '@angular/core';
import { Evaluation } from '../../models/evaluation.model';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements OnInit {

  @Input() restaurantsLst: Restaurant[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  test(restaurant: Restaurant): number {
      var total_etoiles = 0;
      var count = 0;

      for (let evaluation of restaurant.evaluations) {
        total_etoiles += evaluation.etoiles;
        count++;
      }

      return total_etoiles / count;
  }
}
