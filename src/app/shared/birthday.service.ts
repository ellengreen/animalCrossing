import { Injectable } from '@angular/core';
import { CurrentDateService } from './current-date.service';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  constructor(private dateService: CurrentDateService) { }

  getBirthdays(villagerArray){
    let newArray = [];
    Object.keys(villagerArray).forEach(key => {
      if (villagerArray[key].birthday === this.dateService.bdayFormat){
        newArray.push(villagerArray[key]);
      }
    })
    return newArray
  }

}


