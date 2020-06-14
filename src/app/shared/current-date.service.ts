import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CurrentDateService {


  constructor(private datePipe: DatePipe) { }

  today = this.datePipe.transform(Date.now(), 'shortDate'); // MM/DD/YY

  currentMonth = Number(this.today.split('/')[0]);

  currentDay = this.today.split('/')[1]; 

  bdayFormat = this.today.split('/')[1]+'/'+this.today.split('/')[0]
  //today as 'May 23, 2020' etc
  todayFullDate = this.datePipe.transform(Date.now(), 'fullDate');
  //time as 9:03 PM
  todayTime = this.datePipe.transform(Date.now(), 'shortTime');
  //just get the hour
  todayDate = Number(this.datePipe.transform(Date.now(), 'H'));
  
  // .split(':')[0];

}
