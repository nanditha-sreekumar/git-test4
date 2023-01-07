import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';              //typein
import { LeaderService } from '../services/leader.service';  //typein

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];                //typein

  constructor(private leaderService: LeaderService) { }   //typein

  ngOnInit() {		
    this.leaders = this.leaderService.getLeaders();       //typein

  }

}
