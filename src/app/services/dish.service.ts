import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';       //typein
import { DISHES } from '../shared/dishes';   //typein

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {                      //typein
    return DISHES;
  }
}
