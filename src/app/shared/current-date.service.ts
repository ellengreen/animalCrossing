import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CurrentDateService {

  constructor(private datePipe: DatePipe) { }

  today = this.datePipe.transform(Date.now(), 'shortDate');
  currentMonth = Number(this.today.split('/')[0]);
  currentDay = this.today.split('/')[1];
  bdayFormat = this.today.split('/')[1] + '/' + this.today.split('/')[0];
  thisHour = Number(this.datePipe.transform(Date.now(), 'H'));
}
