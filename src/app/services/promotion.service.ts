import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';    //typein 
import { PROMOTIONS } from '../shared/promotions';  //typein

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {                                     //typein
    return PROMOTIONS;
  }

  getPromotion(id: string): Promotion {                              //typein
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedPromotion(): Promotion {                                //typein
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }
}
