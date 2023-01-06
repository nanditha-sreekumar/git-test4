import { Component, OnInit , Input} from '@angular/core';
import { Dish } from '../shared/dish' //typein..

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  @Input()                           //typein..
  dish: Dish;  

  constructor() { }

  ngOnInit() {
  }

}