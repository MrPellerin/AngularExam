import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import { Restaurant } from '../models/restaurant.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurantsLst:BehaviorSubject<Restaurant[]> = new BehaviorSubject<Restaurant[]>([]);

  constructor(private httpClient: HttpClient) {
    this.loadRestaurants();
  }

  public getRestaurants(): Observable<Restaurant[]>{
    return this.restaurantsLst;
  }

  public loadRestaurants(): void {
    this.httpClient.get<Restaurant[]>("http://localhost:3000/restaurants").subscribe(value => this.restaurantsLst.next(value));
  }

  public addRestaurant(restaurant: Restaurant) : void {
    this.httpClient.post("http://localhost:3000/restaurants", restaurant).subscribe(value => this.restaurantsLst.next([...this.restaurantsLst.getValue(), restaurant]));
  }
}
