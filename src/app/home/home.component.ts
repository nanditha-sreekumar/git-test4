import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';                            
import { DishService } from '../services/dish.service';           
import { Promotion } from '../shared/promotion';                  
import { PromotionService } from '../services/promotion.service'; 
import { Leader } from '../shared/leader';                     //typein
import { LeaderService } from '../services/leader.service';    //typein
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;                                                     
  promotion: Promotion; 
  leader: Leader;                                      //typein
                                          
  constructor(private dishService: DishService,                         
    private promotionService: PromotionService,
    private leaderService: LeaderService) { }         //typein

  ngOnInit() {                                                    
    this.dish =this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
    this.leader = this.leaderService.getFeaturedLeader();   ///typein

  }

}
