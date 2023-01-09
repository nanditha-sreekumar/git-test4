import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';   
import { LEADERS } from '../shared/leaders'; 

@Injectable({
  providedIn: 'root'
})
export class LeaderService {                 

  	constructor() { }
//enclose in promise and promise.resolve
	getLeaders(): Promise<Leader[]> {                         
		return Promise.resolve(LEADERS);
	}

	getLeader(id: string): Promise<Leader> {
		return Promise.resolve(LEADERS.filter((lead) => (lead.id === id))[0]);
	}

	getFeaturedLeader(): Promise<Leader> {
		return Promise.resolve(LEADERS.filter((lead) => lead.featured)[0]);
	}

}