import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';                            //typein
import { DishService } from '../services/dish.service';           //typein
import { Promotion } from '../shared/promotion';                  //typein
import { PromotionService } from '../services/promotion.service'; //typein
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;                                                     //typein
  promotion: Promotion;                                           //typein
  constructor(private dishService: DishService,                   //typein      
    private promotionService: PromotionService) { }

  ngOnInit() {                                                    //typein
    this.dish =this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }

}
