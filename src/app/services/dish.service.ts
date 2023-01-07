import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';       
import { DISHES } from '../shared/dishes';   

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {                      
    return DISHES;
  }
//arrow function
  getDish(id: string): Dish {                            //typein
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {                              //typein
    return DISHES.filter((dish) => dish.featured)[0];
  }
}
