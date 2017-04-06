import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService{

  http:any;
  apiKey:string;
  workoutsUrl:string;

  constructor(http:Http){

    this.http = http;
    this.apiKey = 'cODqXBlsplJIg5sa0hxGVxEeuqygb1Zy';
    this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkouts/collections/workouts';

  }

  getWorkouts(){

    return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
      .map(res => res.json());

  }

}
