import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';              
import { LeaderService } from '../services/leader.service';  
import { LEADERS } from '../shared/leaders';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];                

  constructor(private leaderService: LeaderService) { }   

  ngOnInit() {
  //if  the promise is resolved correctly then resolve will be called and the result will be delivered in .then()                    		
    this.leaderService.getLeaders()   
    .then((leaders) => this.leaders = leaders);  //typein   

  }

}
