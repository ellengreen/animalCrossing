import { Injectable } from '@angular/core';
import { NookipediaService } from './nookipedia.service';
import { KeyValuePipe } from '@angular/common';
import { CurrentDateService } from './current-date.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentCritterService {

  constructor(private ns: NookipediaService, private kv: KeyValuePipe, private ds: CurrentDateService) { }

  currentMonth = this.ds.currentMonth;
  thisMonthBugs =[];
  thisMonthFish = [];
  bugs: any;
  fish: any;

  getAllFish(){
    this.ns.getFish().subscribe(data=> {
      this.fish=data
    });
    return this.kv.transform(this.fish);
  }

  newFish(){
    this.getAllFish()
    Object.keys(this.fish).forEach(key=>{
          if (this.fish[key]['months']['northern']['array'].includes(this.currentMonth)){
            return this.thisMonthFish.push(this.fish[key])
          }
        });
  }

  finalFish(){
    this.newFish()
  }
  // currentFish(){
  //   this.getFish()
  //   Object.keys(this.fish).forEach(key=>{
  //     if (this.fish[key]['months']['northern']['array'].includes(this.currentMonth)){
  //       return this.thisMonthFish.push(this.fish[key])
  //     }
  //   });
  // }

  // returnFish(){
  //   this.currentFish();
  //   return this.thisMonthFish;
  // }
}
